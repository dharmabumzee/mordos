import React from "react";

export const Title = ({ handleOnChange, title }) => {
  return (
    <input
      onChange={handleOnChange}
      placeholder="Title"
      name="title"
      type="text"
      value={title}
      className="w-full p-2 border bg-gray-50 rounded-xl focus:outline-none"
    />
  );
};
