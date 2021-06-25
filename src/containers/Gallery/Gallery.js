import React from "react";
import { gallery } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { GalleryContent } from "./GalleryContent";

export const Gallery = () => {
  return (
    <>
      <AppWindow
        svg={gallery.svg}
        backgroundColor={gallery.backgroundColor}
        content={<GalleryContent />}
        title="Gallery"
      />
    </>
  );
};
