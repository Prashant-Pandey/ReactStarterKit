import { HIDE_MESSAGE, SHOW_MESSAGE } from "./actionTypes";

export const showSuccessMessage = (message: string) => ({
  type: SHOW_MESSAGE,
  payload: {
    type: "success",
    message,
    show: true,
  },
});

export const showErrorMessage = (message: string) => ({
  type: SHOW_MESSAGE,
  payload: {
    type: "error",
    message,
    show: true,
  },
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
});
