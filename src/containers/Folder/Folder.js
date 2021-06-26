import React from "react";
import { folder } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { FolderApp } from "./FolderApp";

export const Folder = () => {
  return (
    <>
      <AppWindow
        svg={folder.svg}
        backgroundColor={folder.backgroundColor}
        content={<FolderApp />}
        title="Folder"
      />
    </>
  );
};
