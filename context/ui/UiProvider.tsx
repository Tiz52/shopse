import {FC, useReducer} from "react";
import {UiContext, uiReducer} from "./";

export interface UiState {
  categoryActive: "clothing" | "accessories" | "none";
  isModalOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  categoryActive: "none",
  isModalOpen: false,
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

  const closeModal = () => {
    dispatch({
      type: "[Ui] - Close Modal",
      payload: false,
    });
  }
  const openModal = () => {
    dispatch({
      type: "[Ui] - Open Modal",
      payload: true,

    });
  }

  return (
    <UiContext.Provider
      value={{
        ...state,

        //methods
        changeCategoryActive,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
