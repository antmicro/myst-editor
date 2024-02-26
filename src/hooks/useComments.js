import { useMemo, useState } from "preact/hooks";
import { YComments } from "../comments/ycomments";

export default function useComments(ydoc, provider) {
    if (!ydoc || !provider) return null;

    let [comments, setComments] = useState({});
    let ycomments = useMemo(() => new YComments(ydoc, provider, setComments, comments), []);
    return ycomments
}