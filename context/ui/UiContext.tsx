import {createContext} from "react";

interface ContextProps {
  categoryActive: "clothing" | "accessories" | "none";

  //methods
  changeCategoryActive: (
    categoryActive: "clothing" | "accessories" | "none",
  ) => void;
}

export const UiContext = createContext({} as ContextProps);
