import { LOGIN, LOGOUT, UNAUTHORIZED_ACCESS } from "./actionTypes";

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

export const unauthorizedAccess = () => ({ type: UNAUTHORIZED_ACCESS });
