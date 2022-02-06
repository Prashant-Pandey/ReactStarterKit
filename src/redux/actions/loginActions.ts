import { LOGIN } from "./actionTypes";

export const login = (loginState: "login" | "logout" | "signup") => ({type: LOGIN, payload: loginState})