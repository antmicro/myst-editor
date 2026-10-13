import markdownIt from "markdown-it";

const REVIEW_META = "previewReviewSegments";
const FENCE_REVIEW_META = "previewFenceReviewSegments";
const HTML_REVIEW_META = "previewHtmlReview";
const supportedSuggestionTypes = new Set(["insert", "delete"]);

/** Signature used to refresh rendered review markup when its anchors change. */
export const reviewKey = (reviewItems) =>
  JSON.stringify(reviewItems.map(({ id, kind, type, anchors }) => [id, kind, type ?? null, anchors.map(({ id, from, to }) => [id, from, to])]));

const lineOffsets = (source) => {
  const offsets = [0];
  for (let idx = 0; idx < source.length; idx++) {
    if (source[idx] === "\n") offsets.push(idx + 1);
  }
  return offsets;
};

/**
 * Maps token content back to character positions in the Markdown source.
 * Block syntax (for example `# `, `- `, and `> `) is deliberately skipped
 * because it is not part of the rendered content.
 */
const mapBlockContent = (source, token, offsets) => {
  const positions = Array(token.content.length).fill(null);
  if (!token.map) return positions;

  const contentLines = token.content.split("\n");
  let contentOffset = 0;
  let sourceLine = token.map[0];

  for (const contentLine of contentLines) {
    let match = null;

    while (sourceLine < token.map[1]) {
      const start = offsets[sourceLine];
      const end = sourceLine + 1 < offsets.length ? offsets[sourceLine + 1] - 1 : source.length;
      const sourceLineText = source.slice(start, end);
      const column = sourceLineText.lastIndexOf(contentLine);

      if (column !== -1) {
        match = { start: start + column, end };
        break;
      }
      sourceLine++;
    }

    if (match) {
      for (let idx = 0; idx < contentLine.length; idx++) {
        positions[contentOffset + idx] = match.start + idx;
      }

      if (contentOffset + contentLine.length < token.content.length) {
        positions[contentOffset + contentLine.length] = match.end;
      }
      sourceLine++;
    }

    contentOffset += contentLine.length + 1;
  }

  return positions;
};

/** Map rendered token text to its location in the containing inline source. */
const mapTokenContent = (content, inlineContent, inlinePositions, cursor) => {
  const exactStart = inlineContent.indexOf(content, cursor);
  if (exactStart !== -1) {
    return {
      positions: inlinePositions.slice(exactStart, exactStart + content.length),
      cursor: exactStart + content.length,
    };
  }

  // Escapes, entities, and inline code can render differently from their raw
  // source. Match their visible characters in order while skipping syntax.
  const positions = [];
  let sourceCursor = cursor;
  for (let idx = 0; idx < content.length; idx++) {
    const match = inlineContent.indexOf(content[idx], sourceCursor);
    if (match === -1) {
      positions.push(null);
      continue;
    }
    positions.push(inlinePositions[match]);
    sourceCursor = match + 1;
  }

  return { positions, cursor: sourceCursor };
};

const findBacktickRun = (source, marker, from) => {
  for (let at = source.indexOf(marker, from); at !== -1; at = source.indexOf(marker, at + 1)) {
    if (source[at - 1] !== "`" && source[at + marker.length] !== "`") return at;
  }
  return -1;
};

const mapCodeInlineContent = (token, inlineContent, inlinePositions, cursor) => {
  const marker = token.markup;
  if (!marker) return mapTokenContent(token.content, inlineContent, inlinePositions, cursor);

  for (let open = findBacktickRun(inlineContent, marker, cursor); open !== -1; open = findBacktickRun(inlineContent, marker, open + marker.length)) {
    const close = findBacktickRun(inlineContent, marker, open + marker.length);
    if (close === -1) break;

    const rawContent = inlineContent.slice(open + marker.length, close).replace(/\n/g, " ");
    const trimOuterSpaces = /^ (.+) $/.test(rawContent);
    if ((trimOuterSpaces ? rawContent.slice(1, -1) : rawContent) !== token.content) continue;

    const contentStart = open + marker.length + (trimOuterSpaces ? 1 : 0);
    return {
      positions: inlinePositions.slice(contentStart, contentStart + token.content.length),
      cursor: close + marker.length,
    };
  }

  return mapTokenContent(token.content, inlineContent, inlinePositions, cursor);
};

const reviewItemsAt = (position, reviewItems) => {
  if (position === null) return [];
  return reviewItems.filter(({ anchors }) => anchors.some(({ from, to }) => position >= from && position < to));
};

const reviewSegments = (content, positions, reviewItems) => {
  const segments = [];

  for (let idx = 0; idx < content.length; idx++) {
    const reviews = reviewItemsAt(positions[idx], reviewItems);
    const key = reviewKey(reviews);
    const previous = segments[segments.length - 1];

    if (previous?.key === key) {
      previous.content += content[idx];
    } else {
      segments.push({ content: content[idx], reviews, key });
    }
  }

  return segments;
};

const fencedReviewSegments = (source, token, offsets, reviewItems) => {
  if (!token.map || !token.content) return [];

  const contentLines = token.content.replace(/\n$/, "").split("\n");
  return contentLines.map((content, index) => {
    const sourceLine = token.map[0] + index + 1;
    const start = offsets[sourceLine];
    if (start === undefined) return [];

    const end = sourceLine + 1 < offsets.length ? offsets[sourceLine + 1] - 1 : source.length;
    const column = source.slice(start, end).lastIndexOf(content);
    const positions = Array.from({ length: content.length }, (_, offset) => (column < 0 ? null : start + column + offset));
    return reviewSegments(content, positions, reviewItems);
  });
};

const reviewAttributes = (reviewItems) => {
  const attributes = [];
  const suggestion = reviewItems.find(({ kind, type }) => kind === "suggestion" && supportedSuggestionTypes.has(type));
  const comments = reviewItems.filter(({ kind }) => kind === "comment");

  if (suggestion) {
    attributes.push(["data-suggestion-type", suggestion.type], ["data-suggestion-id", suggestion.id]);
  }
  if (comments.length > 0) {
    attributes.push(["data-review-kind", "comment"], ["data-comment-ids", comments.map(({ id }) => id).join(" ")]);
  }

  return attributes;
};

const renderAttributes = (md, attributes) => attributes.map(([name, value]) => `${name}="${md.utils.escapeHtml(String(value))}"`).join(" ");

/**
 * Split a markdown-it HTML block while preserving offsets into its source.
 * Match comments, tags (including quoted `>`), semicolon-terminated entities,
 * ordinary text, then bare `<` or `&`. Only visible text gets review spans.
 */
const HTML_PARTS = /<!--[\s\S]*?-->|<[a-zA-Z!/?](?:[^>"']|"[^"]*"|'[^']*')*>|&(?:#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);|[^<&]+|[<&]/g;
// A review touching any part of a character reference must wrap it as one unit.
const HTML_ENTITY = /^&(?:#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);$/;

/** Mark visible text in a raw HTML block without changing its tags or entities. */
const renderRawHtmlReviews = (md, content, positions, reviewItems) => {
  let rawTextTag = null;
  return Array.from(content.matchAll(HTML_PARTS), (match) => {
    const part = match[0];
    if (part.startsWith("<") && part.endsWith(">")) {
      const closing = part.match(/^<\s*\/\s*(script|style|textarea|title)\b/i);
      const opening = part.match(/^<\s*(script|style|textarea|title)\b/i);
      if (closing && closing[1].toLowerCase() === rawTextTag) rawTextTag = null;
      else if (opening && !/\/\s*>$/.test(part)) rawTextTag = opening[1].toLowerCase();
      return part;
    }
    if (rawTextTag) return part;

    const partPositions = positions.slice(match.index, match.index + part.length);
    const segments = HTML_ENTITY.test(part)
      ? [
          {
            content: part,
            reviews: reviewItems.filter(({ anchors }) =>
              anchors.some(({ from, to }) => partPositions.some((position) => position !== null && position >= from && position < to)),
            ),
          },
        ]
      : reviewSegments(part, partPositions, reviewItems);
    return segments
      .map(({ content: segment, reviews }) => {
        const attributes = renderAttributes(md, reviewAttributes(reviews));
        return attributes ? `<span ${attributes}>${segment}</span>` : segment;
      })
      .join("");
  }).join("");
};

const uniqueReviews = (segments) => {
  const reviews = new Map();
  for (const segment of segments) {
    for (const review of segment.reviews) reviews.set(review.id, review);
  }
  return [...reviews.values()];
};

export function applyFencedCodeReviews(token, lineElements) {
  const reviewedLines = token.meta?.[FENCE_REVIEW_META];
  if (!reviewedLines) return;

  reviewedLines.forEach((segments, index) => {
    if (!segments.some(({ reviews }) => reviews.length > 0)) return;
    const line = lineElements[index];
    if (!line || line.textContent !== segments.map(({ content }) => content).join("")) return;

    const document = line.ownerDocument;
    const walker = document.createTreeWalker(line, 4);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    let segmentIndex = 0;
    let segmentOffset = 0;
    for (const node of textNodes) {
      const replacement = document.createDocumentFragment();
      let nodeOffset = 0;
      while (nodeOffset < node.textContent.length) {
        const segment = segments[segmentIndex];
        const length = Math.min(node.textContent.length - nodeOffset, segment.content.length - segmentOffset);
        const content = node.textContent.slice(nodeOffset, nodeOffset + length);
        const attributes = reviewAttributes(segment.reviews);
        if (attributes.length) {
          const span = document.createElement("span");
          for (const [name, value] of attributes) span.setAttribute(name, value);
          span.textContent = content;
          replacement.appendChild(span);
        } else {
          replacement.appendChild(document.createTextNode(content));
        }
        nodeOffset += length;
        segmentOffset += length;
        if (segmentOffset === segment.content.length) {
          segmentIndex++;
          segmentOffset = 0;
        }
      }
      node.replaceWith(replacement);
    }
  });
}

/** @param {markdownIt} md */
export function markdownReview(md) {
  const defaultTextRule = md.renderer.rules.text;
  const defaultCodeInlineRule = md.renderer.rules.code_inline;
  const defaultHtmlBlockRule = md.renderer.rules.html_block;

  md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const htmlReview = token.meta?.[HTML_REVIEW_META];
    if (!htmlReview) return defaultHtmlBlockRule(tokens, idx, options, env, self);
    return renderRawHtmlReviews(md, token.content, htmlReview.positions, htmlReview.reviewItems);
  };

  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const segments = token.meta?.[REVIEW_META];
    if (!segments?.some(({ reviews }) => reviews.length > 0)) {
      return defaultTextRule(tokens, idx, options, env, self);
    }

    // Preserve custom text transforms. A transformed token is an indivisible
    // rendered value, so its complete output receives the review attributes.
    const defaultOutput = defaultTextRule(tokens, idx, options, env, self);
    if (defaultOutput !== md.utils.escapeHtml(token.content)) {
      const attrs = renderAttributes(md, reviewAttributes(uniqueReviews(segments)));
      return attrs ? `<span ${attrs}>${defaultOutput}</span>` : defaultOutput;
    }

    return segments
      .map(({ content, reviews }) => {
        const rendered = md.utils.escapeHtml(content);
        const attrs = renderAttributes(md, reviewAttributes(reviews));
        return attrs ? `<span ${attrs}>${rendered}</span>` : rendered;
      })
      .join("");
  };

  md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const segments = token.meta?.[REVIEW_META];
    if (!segments?.some(({ reviews }) => reviews.length > 0)) {
      return defaultCodeInlineRule(tokens, idx, options, env, self);
    }

    const content = segments
      .map(({ content, reviews }) => {
        const rendered = md.utils.escapeHtml(content);
        const attrs = renderAttributes(md, reviewAttributes(reviews));
        return attrs ? `<span ${attrs}>${rendered}</span>` : rendered;
      })
      .join("");
    return `<code${self.renderAttrs(token)}>${content}</code>`;
  };

  md.core.ruler.after("linkify", "render_reviews", (state) => {
    const sourceOffset = state.env.sourceOffset ?? 0;
    const reviewItems = (state.env.reviewItems ?? []).map((reviewItem) => ({
      ...reviewItem,
      anchors: reviewItem.anchors.map((anchor) => ({
        ...anchor,
        from: anchor.from - sourceOffset,
        to: anchor.to - sourceOffset,
      })),
    }));

    if (reviewItems.length === 0) return;

    const offsets = lineOffsets(state.src);
    for (const token of state.tokens) {
      if (token.type === "html_block" && token.map) {
        const sourceStart = offsets[token.map[0]];
        const sourceEnd = offsets[token.map[1]] ?? state.src.length;
        if (reviewItems.some(({ anchors }) => anchors.some(({ from, to }) => from < sourceEnd && to > sourceStart))) {
          token.meta = { ...token.meta, [HTML_REVIEW_META]: { positions: mapBlockContent(state.src, token, offsets), reviewItems } };
        }
        continue;
      }
      if (token.type === "fence") {
        const lines = fencedReviewSegments(state.src, token, offsets, reviewItems);
        if (lines.some((segments) => segments.some(({ reviews }) => reviews.length > 0))) {
          token.meta = { ...token.meta, [FENCE_REVIEW_META]: lines };
        }
        continue;
      }
      if (token.type !== "inline" || !token.children) continue;

      const inlinePositions = mapBlockContent(state.src, token, offsets);
      let cursor = 0;

      for (const child of token.children) {
        if (!child.content || !["text", "code_inline"].includes(child.type)) continue;

        const mapped =
          child.type === "code_inline"
            ? mapCodeInlineContent(child, token.content, inlinePositions, cursor)
            : mapTokenContent(child.content, token.content, inlinePositions, cursor);
        cursor = mapped.cursor;
        const segments = reviewSegments(child.content, mapped.positions, reviewItems);
        if (!segments.some(({ reviews }) => reviews.length > 0)) continue;
        child.meta = { ...child.meta, [REVIEW_META]: segments };
      }
    }
  });
}
