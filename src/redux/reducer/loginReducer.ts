import * as types from "../actions/actionTypes";

export default function loginReducer(
  state: any = {},
  action: { type: string; payload?: any }
) {
  const updatedState: any = { ...state };
  switch (action.type) {
    case types.LOGIN:
      updatedState.login = "login"
      break;
    case types.LOGOUT:
      updatedState.login = "logout";
      localStorage.clear();
      break;
    case types.UNAUTHORIZED_ACCESS:
      updatedState.login = "logout";
      localStorage.clear();
      break;
    default:
      if (!Object.keys(state).length) return null;
      break;
  }
  return updatedState;
}
