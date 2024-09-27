import { useContext, useMemo } from "preact/hooks";
import { YComments } from "../comments/ycomments";
import { MystState } from "../mystState";

export default function useComments(ydoc, provider) {
  const { options } = useContext(MystState);

  return useMemo(() => {
    if (!ydoc || !provider) return null;

    const ycomments = new YComments(ydoc, provider, options.getAvatar.value, options.getUserUrl.value);
    window.myst_editor[options.id.value].ycomments = ycomments;
    return ycomments;
  }, [ydoc, provider, options.id.value, options.getAvatar.value]);
}
