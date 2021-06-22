import React from "react";
import { RSSReader } from "./RSSReader/RSSReader";
import { TextEditor } from "./TextEditor/TextEditor";
import { Folder } from "./Folder/Folder";
import { Camera } from "./Camera/Camera";
import { Gallery } from "./Gallery/Gallery";
import { Browser } from "./Browser/Browser";

export const Desktop = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 p-12 place-items-center md:place-items-start md:grid-cols-1">
        <RSSReader />
        <TextEditor />
        <Folder />
        <Camera />
        <Gallery />
        <Browser />
      </div>
    </>
  );
};
