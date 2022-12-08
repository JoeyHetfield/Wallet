export const LOGIN_INFORMATION = 'LOGIN_INFORMATION';

export const userLogin = (login) => ({
  type: LOGIN_INFORMATION,
  payload: login,
});
