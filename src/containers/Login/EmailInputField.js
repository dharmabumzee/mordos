import React from "react";
import { SuccessIcon } from "./SuccessIcon";

export const EmailInputField = () => {
  return (
    <div className="relative pt-4">
      <SuccessIcon />
      <label className="text-sm font-bold tracking-wide text-gray-700">
        Email
      </label>
      <input
        className="w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="email@example.com"
        // value="mail@gmail.com"
      />
    </div>
  );
};
