import { useMemo, useState } from "preact/hooks";
import { YComments } from "../comments/ycomments";
import { YCommentsParent } from "../components/Comment";

export default function useComments(ydoc, provider) {
    let [comments, setComments] = useState({});
    let ycomments = useMemo(() => new YComments(ydoc, provider, setComments, comments), []);
    return {
        ycomments,
        ycommentsComponent: () => YCommentsParent({comments, ycomments})
    }
}