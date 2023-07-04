import { LOGIN_SUCCESS, RESET, SIGNUP_SUCCESS } from "./constants";

const initialState = {
  isAuthenticated: localStorage.getItem("authApp") || false,
  user: {
  },
  loginData : {}
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("authApp", true);
      return {
        ...state,
        isAuthenticated: true,
        loginData : action.payload
      };

    case RESET:
      localStorage.setItem("authApp", false);
      return {
        initialState,
        isAuthenticated: false
      };

      case SIGNUP_SUCCESS:
        localStorage.setItem("authApp", false);
        return {
          ...state,
          isAuthenticated: false,
          user : action.payload
        };

    default:
      return state;
  }
};

export default AuthReducer;
