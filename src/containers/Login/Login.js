import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { User as getUser } from "./User";
import { LoginForm } from "./LoginForm";
import { AppContext as LoginContext } from "../../context/AppContext";
import { LoginState as getInitialState } from "./LoginState";

export const Login = ({ setIsAuthorized }) => {
  let history = useHistory();
  const { initialStateLogin } = getInitialState();

  const user = getUser();
  const [userLogin, setUserLogin] = useState({
    email: initialStateLogin ? initialStateLogin.email : "",
    password: initialStateLogin ? initialStateLogin.password : "",
  });

  const [checked, setChecked] = useState(initialStateLogin ? true : false);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleOnChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const isMatch =
      userLogin.email === user.userLogin.email &&
      userLogin.password === user.userLogin.password;

    if (isMatch) setIsAuthorized(true);
    if (checked)
      localStorage.setItem("rememberLogin", JSON.stringify(userLogin));
  };

  return (
    <>
      <LoginContext.Provider
        value={{
          history,
          handleOnChange,
          handleSubmit,
          user,
          userLogin,
          setUserLogin,
          checked,
          toggleChecked,
        }}
      >
        <LoginForm />
      </LoginContext.Provider>
    </>
  );
};
