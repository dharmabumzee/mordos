export const User = () => {
  const localStorageUserLogin = localStorage.getItem("user");
  const userLogin = localStorageUserLogin
    ? JSON.parse(localStorageUserLogin)
    : [];

  return { userLogin };
};
