import React from "react";
import { gallery } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const Gallery = () => {
  return (
    <>
      <AppWindow
        svg={gallery.svg}
        backgroundColor={gallery.backgroundColor}
        content="Gallery"
        title="Gallery"
      />
    </>
  );
};
