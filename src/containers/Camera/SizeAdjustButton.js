import React from "react";

export const SizeAdjustButton = ({
  togglePopover,
  handlePopoverOpen,
  handlePopoverClose,
  setDidMouseLeave,
  hasPhoto,
}) => {
  return (
    <button
      className={` ${
        hasPhoto ? "hidden" : ""
      } absolute left-0 w-6 h-6 text-gray-400 cursor-pointer bottom-4 xl:left-16 focus:outline-none`}
      onClick={togglePopover}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onMouseOut={() => setDidMouseLeave(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 ml-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </button>
  );
};
