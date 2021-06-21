import React from "react";
import { RSSReader } from "./RSSReader/RSSReader";
import { TextFile } from "./TextFile/TextFile";
import { Folder } from "./Folder/Folder";
import { Camera } from "./Camera/Camera";
import { Gallery } from "./Gallery/Gallery";
import { Browser } from "./Browser/Browser";

export const Desktop = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 p-12 md:grid-cols-1">
        <RSSReader />
        <TextFile />
        <Folder />
        <Camera />
        <Gallery />
        <Browser />
      </div>
    </>
  );
};
