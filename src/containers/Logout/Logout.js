import React from "react";

export const Logout = ({ setIsAuthorized }) => {
  return (
    <>
      <div
        onClick={() => setIsAuthorized(false)}
        className="absolute p-1 text-sm rounded-lg cursor-pointer font-extralight hover:font-light md:text-base md:p-2 top-2 right-2 hover:bg-red-50 hover:text-indigo-900 md:top-12 hover:text-indigo-800 md:right-16"
      >
        Logout
      </div>
    </>
  );
};
