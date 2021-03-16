import * as api from '../api/auth';

export const registerUser = (formData) => async (dispatch) => {
  const user = await api.register(formData);
  console.log('user: ', user);
  dispatch({
    type: 'AUTH_REGISTER_SUCCESS',
  });
  return user;
};
