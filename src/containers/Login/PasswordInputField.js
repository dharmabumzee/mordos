import React from "react";

export const PasswordInputField = () => {
  return (
    <div className="content-center mt-8">
      <label className="text-sm font-bold tracking-wide text-gray-700">
        Password
      </label>
      <input
        className="content-center w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="Enter your password"
        // value="*****|"
      />
    </div>
  );
};
