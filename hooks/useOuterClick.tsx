import {useRef, useContext, useEffect, useCallback} from "react";
import { UiContext } from "../context/ui";

export const useOuterClick = () => {
  const ref = useRef<HTMLDivElement>(null);

  const {isModalOpen, closeModal} = useContext(UiContext);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
      document.addEventListener("click", handleClick);
      }, 100);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick, isModalOpen]);

  return ref;
};
