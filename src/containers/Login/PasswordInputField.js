import React, { useContext } from "react";
import { AppContext as LoginContext } from "../../context/AppContext";
import { FormFieldTitle } from "./FormFieldTitle";

export const PasswordInputField = () => {
  const { userLogin, handleOnChange } = useContext(LoginContext);

  return (
    <div className="content-center mt-8">
      <FormFieldTitle title="Password" />
      <input
        onChange={handleOnChange}
        className="content-center w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        name="password"
        placeholder="Enter your password"
        value={userLogin.password}
      />
    </div>
  );
};
