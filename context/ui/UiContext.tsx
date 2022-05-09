import {createContext} from "react";

interface ContextProps {
  categoryActive: "clothing" | "accessories" | "none";
  isMenuOpen: boolean;
  //methods
  changeCategoryActive: (
    categoryActive: "clothing" | "accessories" | "none",
  ) => void;
  closeMenu: () => void;
  openMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
