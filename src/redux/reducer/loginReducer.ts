import * as types from "../actions/actionTypes";

export default function loginReducer(
  state: any = {},
  action: { type: string; payload?: any }
) {

  const updatedState: any = { ...state };
  switch (action.type) {
    case types.LOGIN:
      updatedState.login = action.payload;
      break;
  }
  return updatedState;
}
