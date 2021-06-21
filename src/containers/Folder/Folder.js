import React from "react";
import { folder } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const Folder = () => {
  return (
    <>
      <AppWindow
        svg={folder.svg}
        backgroundColor={folder.backgroundColor}
        content="Folder"
        title="Folder"
      />
    </>
  );
};
