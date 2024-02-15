import { useMemo, useState } from "preact/hooks";
import { YComments } from "../comments/ycomments";
import { commentExtension } from "../comments";
import { YCommentsParent } from "../components/Comment";

export default function useComments(ydoc, provider) {
    let [comments, setComments] = useState({});
    let ycomments = useMemo(() => new YComments(ydoc, provider, setComments, comments), []);
    let ycommentsExtension = useMemo(() => commentExtension(ycomments), []);
    return {
        ycomments,
        ycommentsExtension: ycommentsExtension,
        ycommentsComponent: () => YCommentsParent({comments, ycomments})
    }
}