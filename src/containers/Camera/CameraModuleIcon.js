import React from "react";
import { camera as cameraIcon } from "../../utils/iconsThin";

export const CameraModuleIcon = ({ hasPhoto }) => {
  return (
    <div
      className={` ${
        hasPhoto ? "hidden" : ""
      } absolute bottom-4 right-4 xl:right-16 rounded-lg bg-opacity-90 backdrop-blur-lg backdrop-filter blur-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`}
    >
      {cameraIcon.svg}
    </div>
  );
};
