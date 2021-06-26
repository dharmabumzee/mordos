export const LoginState = () => {
  const localStorageRememberMe = localStorage.getItem("rememberLogin");
  const initialStateLogin = localStorageRememberMe
    ? JSON.parse(localStorageRememberMe)
    : "";
  return { initialStateLogin };
};
