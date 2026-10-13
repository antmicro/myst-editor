// CodeEditor nests this fragment under its .cm-editor selector.
export const ReviewStyles = `
  & {
    --review-card-width: min(20rem, calc(100% - 52px));
    --review-marker-width: 28px;
    --review-card-edge-gap: 8px;
    --review-line-clearance: calc(var(--review-marker-width) + var(--review-card-edge-gap) + 12px);
  }
  &.cm-review-cards-wide {
    --review-card-width: clamp(17rem, calc(100% - 24rem - 20px), 20rem);
    --review-line-clearance: calc(var(--review-card-width) + var(--review-card-edge-gap) + 20px);
  }
  &.cm-review-cards-wide .cm-content { position: relative; }
  &.cm-review-cards-wide .cm-content::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: calc(var(--review-card-width) + var(--review-card-edge-gap) + 10px);
    border-left: 1px solid var(--border);
  }
  &.cm-reviews-hidden, &.cm-review-cards-empty { --review-line-clearance: 0px; }
  .suggestions-insert, .suggestions-insert *:not(.cm-review-card-widget):not(.cm-review-card-widget *) {
    color: var(--green-500);
    background: var(--inserted-bg);
  }
  .suggestions-insert { text-decoration: underline var(--green-500); }
  .suggestions-delete { color: var(--red-500); background: var(--deleted-bg); text-decoration: line-through 2px var(--red-500); }
  .review-comment-range { background-color: rgba(0, 131, 225, 0.14); box-shadow: inset 0 0 0 1px rgba(0, 131, 225, 0.45); }
  .review-selection, .review-selection *:not(.cm-review-card-widget):not(.cm-review-card-widget *) { background-color: rgba(0, 135, 255, 0.2); }
  .cm-line { position: relative; padding-right: var(--review-line-clearance); }
  &:not(.cm-reviews-hidden) .cm-content .cm-activeLine {
    background-color: transparent;
    background-image: linear-gradient(to right, var(--editor-active-line-bg) calc(100% - var(--review-line-clearance)), transparent 0);
  }
  .cm-review-card-anchor {
    display: inline-block;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .cm-review-card-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
  }
  .cm-review-card-widget {
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    color: var(--panel-fg);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  .cm-review-card-widget:not(.cm-review-card-positioned) { opacity: 0; }
  .cm-review-card-widget:not(.cm-review-card-positioned) .cm-review-card-marker, .cm-review-card-widget:not(.cm-review-card-positioned) .cm-review-card {
    pointer-events: none;
  }
  .cm-review-card-widget.cm-review-card-hovered, .cm-review-card-widget.cm-review-card-pinned, .cm-review-card-widget:focus-within, .cm-review-card-widget:has(.cm-review-card-selected) {
    z-index: 30;
  }
  .cm-review-card-marker {
    position: absolute;
    top: 0;
    right: var(--review-card-edge-gap);
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--review-marker-width);
    height: var(--review-marker-width);
    padding: 0;
    box-sizing: border-box;
    pointer-events: auto;
    cursor: pointer;
    background-color: var(--panel-bg);
    border: 2px solid var(--review-author-color, var(--border));
    border-radius: 50%;
    box-shadow: 0 2px 6px var(--box-shadow);
    overflow: hidden;
    opacity: 1;
  }
  .cm-review-card-marker:hover, .cm-review-card-marker:focus-visible, .cm-review-card-widget.cm-review-card-hovered .cm-review-card-marker, .cm-review-card-widget:has(.cm-review-card-selected) .cm-review-card-marker {
    border-color: #0087ff;
    outline: 2px solid rgba(0, 135, 255, 0.22);
  }
  .cm-review-marker-avatar {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cm-review-marker-initials {
    display: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: color-mix(in srgb, var(--review-author-color, var(--border)) 22%, var(--panel-bg));
    color: var(--panel-fg);
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
  }
  .cm-review-avatar-placeholder .cm-review-marker-avatar { display: none; }
  .cm-review-avatar-placeholder .cm-review-marker-initials { display: flex; }
  &.cm-review-cards-expanded .cm-review-card-marker { display: none; }
  .cm-review-card {
    position: absolute;
    top: var(--review-card-popup-top, 0px);
    right: calc(var(--review-card-edge-gap) + var(--review-marker-width) + 6px);
    z-index: 20;
    pointer-events: none;
    transform: translateY(var(--review-card-offset, 0px));
    transition: transform 180ms ease-out,
      border-color 100ms ease-out,
      box-shadow 120ms ease-out;
    display: flex;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    gap: 8px;
    width: var(--review-card-width);
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--panel-bg);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 12px var(--box-shadow);
  }
  .cm-comment-card { border: 1px solid #0087ff; }
  .cm-review-card-widget.cm-review-card-hovered .cm-review-card, .cm-review-card-widget.cm-review-card-pinned .cm-review-card, .cm-review-card-widget:focus-within .cm-review-card {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    animation: cm-review-card-fade-in 100ms ease-out both;
  }
  &.cm-review-cards-expanded .cm-review-card {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    animation: cm-review-card-fade-in 100ms ease-out both;
    right: var(--review-card-edge-gap);
  }
  .cm-review-card-widget.cm-review-card-fading-out .cm-review-card {
    visibility: visible;
    opacity: 0;
    pointer-events: none;
    animation: cm-review-card-fade-out 100ms ease-out both;
  }
  &.cm-review-cards-wide .cm-review-card { top: 0; }
  .cm-review-card.cm-review-card-selected {
    border-color: #0087ff;
    box-shadow: 0 0 0 2px rgba(112, 158, 190, 1),
      0 4px 16px color-mix(in oklch, #000 8%, transparent);
  }
  .cm-review-card:has(.cm-comment-card-menu) { z-index: 40; }
  .cm-review-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .cm-review-card .avatar {
    display: block;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 50%;
  }
  .cm-review-card-author {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cm-review-card-created-at {
    display: block;
    color: var(--editor-gutter-fg);
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    white-space: normal;
  }
  .cm-review-card-actions { display: flex; align-items: center; gap: 4px; }
  .cm-review-card button {
    padding: 2px 6px;
    border: 0px solid var(--border);
    border-radius: 4px;
    background-color: var(--button-bg);
    cursor: pointer;
  }
  .cm-review-card .cm-review-card-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 7px;
    color: inherit;
    background-color: transparent;
  }
  .cm-review-card .cm-review-card-icon-button:hover { background-color: var(--button-bg-hover); }
  .cm-review-card-action-icon {
    display: inline-flex;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    pointer-events: none;
    background-color: currentColor;
    -webkit-mask-image: var(--review-icon-url);
    mask-image: var(--review-icon-url);
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
  }
  .cm-comment-card-more { position: relative; display: inline-flex; }
  .cm-comment-card-menu {
    position: absolute;
    top: 36px;
    right: 0;
    z-index: 30;
    display: grid;
    min-width: 156px;
    padding: 4px;
    color: inherit;
    background-color: var(--panel-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    box-shadow: 0 4px 16px color-mix(in oklch, #000 12%, transparent);
  }
  .cm-review-card .cm-comment-card-menu button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px;
    color: inherit;
    white-space: nowrap;
    background-color: transparent;
  }
  .cm-review-card .cm-comment-card-menu button:hover { background-color: var(--button-bg-hover); }
  .cm-review-card .cm-comment-card-menu .cm-comment-card-delete { color: #dc2626; }
  .cm-suggestion-card-content { overflow-wrap: anywhere; white-space: normal; }
  .cm-comment-card-content, .cm-review-card-comment-text { display: block; overflow-wrap: anywhere; white-space: pre-wrap; }
  .cm-review-card-thread {
    display: grid;
    gap: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--border);
  }
  .cm-review-card-comment { display: grid; gap: 6px; }
  .cm-review-card-comment + .cm-review-card-comment { padding-top: 8px; border-top: 1px solid var(--border); }
  .cm-review-card-composer, .cm-comment-card-edit {
    display: grid;
    gap: 8px;
    padding-top: 8px;
    max-height: 10rem;
    overflow: hidden;
    animation: cm-review-card-composer-enter 160ms cubic-bezier(0.2, 0, 0, 1) both;
  }
  .cm-review-card-composer input, .cm-comment-card-edit input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    background-color: var(--editor-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    outline: none;
  }
  .cm-review-card-composer input:focus, .cm-comment-card-edit input:focus { border-color: var(--accent); }
  .cm-review-card-composer-actions, .cm-comment-card-edit-actions { display: flex; justify-content: flex-end; gap: 6px; }
  .cm-review-card-composer-actions button, .cm-comment-card-edit-actions button {
    box-sizing: border-box;
    display: inline-flex;
    width: auto;
    max-width: 100%;
    justify-self: start;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-shrink: 0;
    appearance: none;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 8px;
    font: inherit;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    outline: none;
    transition: background-color 150ms ease,
      border-color 150ms ease,
      color 150ms ease,
      box-shadow 150ms ease,
      transform 150ms ease-out;
  }
  .cm-review-card-composer-actions button[data-size="sm"], .cm-comment-card-edit-actions button[data-size="sm"] {
    height: 32px;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 6px;
  }
  .cm-review-card-composer-actions button[data-variant="accent"], .cm-comment-card-edit-actions button[data-variant="accent"] {
    border-color: rgba(255, 255, 255, 0.24);
    background: #0087ff;
    color: #fff;
  }
  .cm-review-card-composer .cm-review-card-reply:disabled, .cm-comment-card-edit button:disabled { opacity: 0.5; cursor: default; }
  .suggestion-content { display: grid; grid-template-columns: 16px minmax(0, 1fr); gap: 4px; }
  .suggestion-diff {
    display: grid;
    gap: 4px;
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--editor-bg);
  }
  @keyframes cm-review-card-composer-enter {
    0% { opacity: 0; max-height: 0; padding-top: 0; }
    100% { opacity: 1; max-height: 10rem; padding-top: 8px; }
  }
  @keyframes cm-review-card-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes cm-review-card-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .cm-review-card, .cm-review-card-marker, .cm-review-card-composer, .cm-comment-card-edit { transition: none; animation: none; }
  }
`;
