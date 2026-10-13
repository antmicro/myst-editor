import { useLayoutEffect, useRef, useState } from "preact/hooks";

const authorInitials = (name) =>
  name
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toUpperCase() || "?";

export const ReviewCardMarker = ({ kind, author, onSelect }) => {
  const avatarRef = useRef(null);
  const [loadedAvatarUrl, setLoadedAvatarUrl] = useState(null);
  const avatarUrl = author?.avatarUrl || "";
  const label = kind === "comment" ? "Open comment" : "Open suggestion";
  const showAvatar = avatarUrl && loadedAvatarUrl === avatarUrl;

  useLayoutEffect(() => {
    const avatar = avatarRef.current;
    setLoadedAvatarUrl(avatar.complete && avatar.naturalWidth > 0 ? avatarUrl : null);
  }, [avatarUrl]);

  return (
    <button
      type="button"
      className={`cm-review-card-marker${showAvatar ? "" : " cm-review-avatar-placeholder"}`}
      title={label}
      aria-label={label}
      style={{ "--review-author-color": author?.color || undefined }}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onSelect}
    >
      <img
        ref={avatarRef}
        className="cm-review-marker-avatar"
        src={avatarUrl || undefined}
        alt=""
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth > 0) setLoadedAvatarUrl(avatarUrl);
        }}
        onError={() => setLoadedAvatarUrl(null)}
      />
      <span className="cm-review-marker-initials" aria-hidden="true">
        {authorInitials(author?.name)}
      </span>
    </button>
  );
};
