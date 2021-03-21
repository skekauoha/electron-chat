import * as api from '../api/auth';

export const registerUser = (formData) => async (dispatch) => {
  await api.register(formData);
  dispatch({
    type: 'AUTH_REGISTER_SUCCESS',
  });
};

export const login = (formData) => async (dispatch) => {
  await api.login(formData);
  dispatch({ type: 'AUTH_LOGIN_SUCCESS' });
};

export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch({ type: 'AUTH_LOGOUT_SUCCESS' });
};

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: 'AUTH_ON_INIT' });
  api.onAuthStateChanges((authUser) => {
    if (authUser) {
      dispatch({ type: 'AUTH_ON_SUCCESS', user: authUser });
      console.log('we are authenticated');
    } else {
      dispatch({ type: 'AUTH_ON_ERROR' });
      console.log('we are NOT authenticated');
    }
  });
};
