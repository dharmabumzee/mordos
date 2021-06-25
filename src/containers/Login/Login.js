import React from "react";
import { LoginTitle } from "./LoginTitle";
import { LoginOptions } from "./LoginOptions";
import { SignInButton } from "./SignInButton";
import { EmailInputField } from "./EmailInputField";
import { PasswordInputField } from "./PasswordInputField";
import { useHistory } from "react-router-dom";

export const Login = () => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-12 bg-no-repeat bg-cover bg-thistle sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 bg-black blur-2xl opacity-60"></div>
      <div className="z-10 w-full max-w-md p-10 space-y-2 bg-white backdrop-saturate-50 backdrop-blur-md backdrop-filter backdrop-sepia rounded-xl">
        <LoginTitle />

        <form className="mt-8 space-y-6" onClick={handleSubmit}>
          <EmailInputField />
          <PasswordInputField />
          <LoginOptions />
          <SignInButton history={history} />
        </form>
      </div>
    </div>
  );
};
