import React from "react";

export const TextAreaHeadline = () => {
  return (
    <div className="flex items-center justify-between h-24 mb-8 border-b-2">
      <div className="flex items-center space-x-4"></div>
      <h6 className="text-2xl font-bold opacity-80 bottom-2 right-8">
        plain
        <span className="text-xl text-blueViolet">.</span>
        text
        <span className="text-xl text-blueViolet">.</span>
        editor
      </h6>
    </div>
  );
};
