import { useEffect, useRef } from "preact/hooks";

export function useOutsideClick(ref, handler, enabled) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;

    const ownerDocument = element.ownerDocument;
    const onPointerDown = (event) => {
      const path = event.composedPath?.() ?? [];
      if (path.includes(element) || element.contains(event.target)) return;
      handlerRef.current(event);
    };

    ownerDocument.addEventListener("pointerdown", onPointerDown, true);
    return () => ownerDocument.removeEventListener("pointerdown", onPointerDown, true);
  }, [ref, enabled]);
}
