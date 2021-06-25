import React from "react";
import { textfile } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { TextEditorApp } from "./TextEditorApp";

export const TextEditor = () => {
  return (
    <>
      <AppWindow
        svg={textfile.svg}
        backgroundColor={textfile.backgroundColor}
        content={<TextEditorApp />}
        title="Text Editor"
      />
    </>
  );
};
