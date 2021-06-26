export const User = () => {
  const localStorageUserLogin = localStorage.getItem("user");
  const userLogin = JSON.parse(localStorageUserLogin);

  return { userLogin };
};
