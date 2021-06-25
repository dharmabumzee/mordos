import React from "react";

export const TextBody = ({ handleOnChange, text }) => {
  return (
    <textarea
      onChange={handleOnChange}
      name="text"
      value={text}
      className="w-full p-2 textarea-height bg-gray-50 rounded-xl focus:outline-none"
      placeholder="Type here..."
    ></textarea>
  );
};
