export const LOGIN_INFORMATION = 'LOGIN_INFORMATION';

export const userLogin = (email) => ({
  type: LOGIN_INFORMATION,
  payload: email,
});
