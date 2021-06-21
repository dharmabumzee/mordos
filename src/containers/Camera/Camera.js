import React from "react";
import { camera } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const Camera = () => {
  return (
    <>
      <AppWindow
        svg={camera.svg}
        backgroundColor={camera.backgroundColor}
        content="Camera"
        title="Camera"
      />
    </>
  );
};
