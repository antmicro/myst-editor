import { useContext, useMemo } from "preact/hooks";
import { YComments } from "../comments/ycomments";
import { MystState } from "../mystState";

export default function useComments(ydoc, provider, getAvatar, getUserUrl) {
  const { id } = useContext(MystState);

  if (!ydoc || !provider) return null;
  return useMemo(() => {
    const ycomments = new YComments(ydoc, provider, getAvatar, getUserUrl);
    window.myst_editor[id.value].ycomments = ycomments;
    return ycomments;
  }, []);
}
