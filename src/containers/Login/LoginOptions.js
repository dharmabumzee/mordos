import React, { useContext } from "react";
import { AppContext as LoginContext } from "../../context/AppContext";

export const LoginOptions = () => {
  const { toggleChecked, checked } = useContext(LoginContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          onChange={toggleChecked}
          defaultChecked={checked}
          id="remember_me"
          name="remember_me"
          type="checkbox"
          className="w-4 h-4 bg-indigo-500 border-gray-300 rounded focus:ring-indigo-400"
        />
        <label className="block ml-2 text-sm text-gray-900">Remember me</label>
      </div>
      <div className="text-sm">
        <button
          className="font-medium text-indigo-200 cursor-not-allowed"
          disabled
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );
};
