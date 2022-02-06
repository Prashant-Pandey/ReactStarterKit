import { unauthorizedAccessMsg } from "../../utils/constants";
import { HIDE_MESSAGE, SHOW_MESSAGE, UNAUTHORIZED_ACCESS } from "../actions/actionTypes";
export interface IMessagePayload {
  type: "error" | "success";
  message: string;
  show: boolean;
}
export interface IMessageAction {
  type: typeof SHOW_MESSAGE | typeof HIDE_MESSAGE | typeof UNAUTHORIZED_ACCESS;
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
    case UNAUTHORIZED_ACCESS:
        updatedState.message = unauthorizedAccessMsg;
        updatedState.type = "error";
        updatedState.show = true;
        break;
  }
  return updatedState;
}
