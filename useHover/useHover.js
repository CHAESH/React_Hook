import { useEffect, useRef } from "react";

export const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onHover);
      }
    };
  }, []);
  return element;
};
