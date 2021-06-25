import React from "react";
import { Date } from "../../utils/Date";

export const TextEditorNote = ({ title, date, excerpt }) => {
  return (
    <div className="flex items-start p-3 px-4 mx-2 overflow-y-scroll text-sm text-left border-b-2 cursor-pointer hover:bg-blue-100 focus:outline-none focus:ring-2 focus:border-blue-300">
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-text ">{title}</span>

          <div className="flex items-center ">
            <span className="font-normal text-grey-800">
              <Date />
            </span>
            <p className="mb-0.5 ml-2 text-base leading-normal text-gray-400">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
