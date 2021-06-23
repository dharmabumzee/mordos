import React from "react";

export const Canvas = ({ hasPhoto, children, photoRef }) => {
  return (
    <div
      className={`fixed flex flex-col align-center backdrop-blur-xl backdrop-filter overflow-x-hidden transition-all delay-500 top-0  w-full h-full result + ${
        hasPhoto
          ? "left-0 items-center transition-delay-3000 duration-1000 ease-in-out justify-center w-full"
          : "hidden  left-full"
      }`}
    >
      <canvas
        id="mycanvas"
        ref={photoRef}
        className={`${hasPhoto ? "" : "hidden"} overflow-x-hidden`}
      ></canvas>

      {children}
    </div>
  );
};
