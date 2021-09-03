import { authConstants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};


export const register = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.IS_USER_LOGGED_IN,
      payload: {
      },
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
      payload: {
      },
    });
  };
};