import React, { useContext } from "react";
import { SuccessIcon } from "./SuccessIcon";
import { AppContext as LoginContext } from "../../context/AppContext";
import { FormFieldTitle } from "./FormFieldTitle";

export const EmailInputField = () => {
  const { userLogin, handleOnChange, user } = useContext(LoginContext);

  return (
    <div className="relative pt-4">
      {userLogin.email === user.userLogin.email ? <SuccessIcon /> : null}
      <FormFieldTitle title="Email" />
      <input
        onChange={handleOnChange}
        className="w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        name="email"
        placeholder="email@example.com"
        value={userLogin.email}
      />
    </div>
  );
};
