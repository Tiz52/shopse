import {createContext} from "react";

interface ContextProps {
  categoryActive: "clothing" | "accessories" | "none";
  isModalOpen: boolean;
  //methods
  changeCategoryActive: (
    categoryActive: "clothing" | "accessories" | "none",
  ) => void;
  closeModal: () => void;
  openModal: () => void;
}

export const UiContext = createContext({} as ContextProps);
