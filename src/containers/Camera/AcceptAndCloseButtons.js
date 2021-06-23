import React from "react";

export const AcceptAndCloseButtons = ({
  acceptPhotoTaken,
  closePhotoTaken,
  hasPhoto,
}) => {
  return (
    <div className="relative z-30 flex justify-between w-5/6 mt-12 lg:w-1/4">
      <button
        onClick={closePhotoTaken}
        className={`${
          hasPhoto ? "" : "hidden"
        } close-photo shadow-inner focus:outline-none background-sepia text-red-50 p-4 hover:bg-red-400`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          acceptPhotoTaken();
          closePhotoTaken();
        }}
        className={`${
          hasPhoto ? "" : "hidden"
        } accept-photo focus:outline-none shadow-inner background-sepia text-red-50 p-4 hover:bg-green-500`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  );
};
