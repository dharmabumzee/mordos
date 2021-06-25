import React from "react";

export const SignInButton = ({ history }) => {
  return (
    <div>
      <button
        onClick={() => {
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
