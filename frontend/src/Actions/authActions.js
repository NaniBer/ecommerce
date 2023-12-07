export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const logoutSuccess = (user) => ({
  type: "LOGOUT_SUCCESS",
});
