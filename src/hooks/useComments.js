import { useMemo, } from "preact/hooks";
import { YComments } from "../comments/ycomments";

export default function useComments(ydoc, provider) {
    if (!ydoc || !provider) return null;
    return useMemo(() => new YComments(ydoc, provider), []);
}