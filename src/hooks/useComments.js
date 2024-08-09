import { useMemo } from "preact/hooks";
import { YComments } from "../comments/ycomments";

export default function useComments(ydoc, provider, getAvatar) {
  if (!ydoc || !provider) return null;
  return useMemo(() => {
    const ycomments = new YComments(ydoc, provider, getAvatar);
    window.myst_editor.ycomments = ycomments;
    return ycomments;
  }, []);
}
