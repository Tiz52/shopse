import {FC, useReducer} from "react";
import {UiContext, uiReducer} from "./";

export interface UiState {
  categoryActive: "clothing" | "accessories" | "none";
}

const Ui_INITIAL_STATE: UiState = {
  categoryActive: "none",
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

  return (
    <UiContext.Provider
      value={{
        ...state,

        //methods
        changeCategoryActive,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
