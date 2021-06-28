import React from "react";

export const Logout = ({ setIsAuthorized }) => {
  return (
    <>
      <div
        onClick={() => setIsAuthorized(false)}
        className="absolute p-1 text-sm rounded-lg cursor-pointer transition hover:scale-110 translate-y-0.5 duration-300 ease-in-out transform cursor-pointer hover:shadow-md  rounded-2xl  backdrop-filter-blur bg-clip-padding bg-opacity-90  font-extralight hover:font-light md:text-base md:p-2 top-2 right-4 hover:bg-red-50 hover:text-indigo-900 md:top-12 hover:text-indigo-800 md:right-16"
      >
        Logout
      </div>
    </>
  );
};
