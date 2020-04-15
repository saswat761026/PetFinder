import { ATTEMPT_USER_LOGIN, ATTEMPT_CREATE_USER } from "./../../shared/actionType";

export const loginAction = (email, password) => {
  return {
    type: ATTEMPT_USER_LOGIN,
    payload: { email: email, password: password }
  };
};

export const signUpAction = (formDetails) =>{
  return {
    type: ATTEMPT_CREATE_USER,
    payload:formDetails
  }
} 