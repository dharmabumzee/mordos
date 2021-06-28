import React from "react";

export const TakePhotoButton = ({ windowSize, takePhoto, hasPhoto }) => {
  let width = windowSize.width;
  let height = windowSize.height;

  return (
    <>
      {width < height ? (
        <div
          onClick={takePhoto}
          className={`${
            hasPhoto ? "hidden" : ""
          } relative z-40 content-center w-32 h-32 mb-64 m-auto  mt-0 sm:mt-0 mb-12 cursor-pointer lg:mt-0 xl:mt-4 2xl:mt-0  2xl:mb-12 3xl:mt-0 lg:mb-0 take-photo`}
        >
          <div className="absolute inset-0 bg-white rounded-full shadow-2xl opacity-25 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
          <div className="absolute inset-0 transition duration-300 transform hover:scale-75 ">
            <div className="w-full h-full bg-white border-2 rounded-full shadow-2xl border-amber-300 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
        </div>
      ) : (
        <div
          onClick={takePhoto}
          className={`${
            hasPhoto ? "hidden" : ""
          } absolute z-50 w-16 h-16 -bottom-12 lg:bottom-4 xl:bottom-32 xl:w-32 xl:h-32 cursor-pointer `}
        >
          <div className="absolute inset-0 bg-white rounded-full shadow-2xl opacity-25 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
          <div className="absolute inset-0 transition duration-300 transform hover:scale-75 ">
            <div className="w-full h-full bg-white border-2 rounded-full shadow-2xl border-amber-300 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
          </div>
        </div>
      )}
    </>
  );
};
