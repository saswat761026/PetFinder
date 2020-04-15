import { loginAction, signUpAction } from "./userAction";
import { startLoader, stopLoader, showAlert, hideAlert } from "./generalAction";

export const login = loginAction;
export const signup = signUpAction;
export const startloader = startLoader;
export const stoploader = stopLoader;
export const showalert = showAlert;
export const hidealert = hideAlert;
