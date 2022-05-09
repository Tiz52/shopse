import {UiState} from "./";

type UiActionType =
  | {
      type: "[Ui] - Change Category";
      payload: "clothing" | "accessories" | "none";
    }
  | {
      type: "[Ui] - Close Modal";
      payload: boolean;
    }
  | {
      type: "[Ui] - Open Modal";
      payload: boolean;
    };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - Change Category":
      return {
        ...state,
        categoryActive: action.payload,
      };
    case "[Ui] - Close Modal":
      return {
        ...state,
        isMenuOpen: action.payload,
      };
    case "[Ui] - Open Modal":
      return {
        ...state,
        isMenuOpen: action.payload,
      };

    default:
      return state;
  }
};
