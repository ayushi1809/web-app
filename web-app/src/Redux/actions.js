import { LOGIN_SUCCESS,SIGNUP_SUCCESS, RESET } from "./constants";

export const getLogin = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
};

export const getSignUp = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data
  }
}

export const resetAction = () => {
  return {
  type:  RESET
  }
}
