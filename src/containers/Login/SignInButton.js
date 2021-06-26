import React, { useContext } from "react";
import { AppContext as LoginContext } from "../../context/AppContext";

export const SignInButton = () => {
  const { history, handleSubmit } = useContext(LoginContext);
  return (
    <div>
      <button
        onClick={() => {
          handleSubmit();
          history.push("/");
        }}
        type="submit"
        className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-indigo-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-indigo-600"
      >
        Sign in
      </button>
    </div>
  );
};
