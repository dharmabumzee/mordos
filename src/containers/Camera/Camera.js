import React from "react";
import { camera } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { CameraApp } from "./CameraApp";

export const Camera = () => {
  return (
    <>
      <AppWindow
        svg={camera.svg}
        backgroundColor={camera.backgroundColor}
        content={<CameraApp />}
        title="Camera"
      />
    </>
  );
};
