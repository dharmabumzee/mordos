import React from "react";
import { TextField } from "./TextField";
import { TextEditorList } from "./TextEditorList";

export const TextEditorContent = () => {
  return (
    <div className="grid grid-cols-10">
      <TextEditorList />
      <TextField />
    </div>
  );
};
