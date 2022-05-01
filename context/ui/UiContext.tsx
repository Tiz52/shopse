import {createContext} from "react";

interface ContextProps {
  categoryActive: "shoes" | "clothing" | "accessories" | "none";

  //methods
  changeCategoryActive: (
    categoryActive: "shoes" | "clothing" | "accessories" | "none",
  ) => void;
}

export const UiContext = createContext({} as ContextProps);
