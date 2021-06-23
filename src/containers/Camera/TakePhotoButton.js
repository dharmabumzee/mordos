import React from "react";

export const TakePhotoButton = ({ takePhoto, hasPhoto }) => {
  return (
    <div
      onClick={takePhoto}
      className={`${
        hasPhoto ? "hidden" : ""
      } relative z-40 content-center w-32 h-32 m-auto mt-8  sm:mt-12 mb-12 cursor-pointer lg:mt-24 xl:mt-4 2xl:mt-0  2xl:mb-12 3xl:mt-24 lg:mb-0 take-photo`}
    >
      <div className="absolute inset-0 bg-white rounded-full shadow-2xl opacity-25 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
      <div className="absolute inset-0 transition duration-300 transform hover:scale-75 ">
        <div className="w-full h-full bg-white border-2 rounded-full shadow-2xl border-amber-300 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
      </div>
    </div>
  );
};
