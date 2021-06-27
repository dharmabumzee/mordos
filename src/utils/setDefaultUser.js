export const setDefaultUser = () => {
  const user = {
    email: process.env.REACT_APP_DEFAULT_USER_EMAIL,
    password: process.env.REACT_APP_DEFAULT_USER_PASSWORD,
  };
  localStorage.setItem("user", JSON.stringify(user));
};
