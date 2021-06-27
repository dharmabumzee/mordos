import React from "react";
import { formatDate, formatTime } from "../../utils/formatTimestamp";

export const LastEditedIcon = ({ editMode, lastEdit }) => {
  return (
    <div
      className={`${
        editMode ? "flex w-1/3 items-center" : "invisible w-6"
      } h-6 text-gray-400`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
      {editMode && lastEdit[0].edit ? (
        <span className={`${editMode ? "" : "invisible"} mt-1 ml-1 text-xs`}>
          Last edited: {lastEdit[0].edit ? formatTime(lastEdit[0].edit) : null},{" "}
          {lastEdit[0].edit ? formatDate(lastEdit[0].edit) : null}
        </span>
      ) : null}
    </div>
  );
};
