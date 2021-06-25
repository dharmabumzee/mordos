import React from "react";
import { Clock } from "../Clock";
import { TextEditorIconMenu } from "./TextEditorIconMenu";

export const TextField = () => {
  return (
    <div className="relative w-full col-span-7 border">
      <div className="flex flex-col h-screen">
        <TextEditorIconMenu />
        <Clock />
        <textarea className="flex-grow w-full p-2 border focus:outline-none"></textarea>
      </div>
    </div>
  );
};
