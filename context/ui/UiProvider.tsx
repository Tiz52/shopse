import {FC, useReducer} from "react";
import {UiContext, uiReducer} from "./";

export interface UiState {
  categoryActive: "clothing" | "accessories" | "none";
  isMenuOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  categoryActive: "none",
  isMenuOpen: false,
};

interface Props {
  children: React.ReactNode;
}

export const UiProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const changeCategoryActive = (
    categoryActive: "clothing" | "accessories" | "none",
  ) => {
    dispatch({
      type: "[Ui] - Change Category",
      payload: categoryActive,
    });
  };

  const closeMenu = () => {
    dispatch({
      type: "[Ui] - Close Modal",
      payload: false,
    });
  };
  const openMenu = () => {
    dispatch({
      type: "[Ui] - Open Modal",
      payload: true,
    });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        //methods
        changeCategoryActive,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
