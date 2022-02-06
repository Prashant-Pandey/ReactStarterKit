import { HIDE_MESSAGE, SHOW_MESSAGE } from "../actions/actionTypes";
export interface IMessagePayload {
  type: "error" | "success";
  message: string;
  show: boolean;
}
export interface IMessageAction {
  type: typeof SHOW_MESSAGE | typeof HIDE_MESSAGE;
  payload: IMessagePayload;
}

const defaultState: IMessagePayload = {
  type: "error",
  message: "",
  show: false,
};

export default function messageReducer(state: any = {}, msgAction: any) {
  const updatedState: IMessagePayload = { ...defaultState, ...state };
  const action: IMessageAction = msgAction;
  switch (action.type) {
    case SHOW_MESSAGE:
      updatedState.show = true;
      updatedState.message = action.payload.message;
      updatedState.type = action.payload.type;
      break;
    case HIDE_MESSAGE:
      updatedState.show = false;
      break;
  }
  return updatedState;
}
