import * as api from '../api/auth';

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: 'AUTH_REGISTER_INIT',
    });
    await api.register(formData);
    dispatch({
      type: 'AUTH_REGISTER_SUCCESS',
      user: {},
    });
  } catch (error) {
    dispatch({ type: 'AUTH_REGISTER_ERROR', error });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_LOGIN_INIT' });
    await api.login(formData);
    dispatch({ type: 'AUTH_LOGIN_SUCCESS', user: {} });
  } catch (error) {
    dispatch({ type: 'AUTH_LOGIN_ERROR', error });
  }
};

export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch({ type: 'AUTH_LOGOUT_SUCCESS' });
};

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: 'AUTH_ON_INIT' });
  api.onAuthStateChanges(async (authUser) => {
    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid);
      dispatch({ type: 'AUTH_ON_SUCCESS', user: userProfile });
    } else {
      dispatch({ type: 'AUTH_ON_ERROR' });
    }
  });
};
