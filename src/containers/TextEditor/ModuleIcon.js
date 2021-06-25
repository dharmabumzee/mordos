import React from "react";
import { textfile } from "../../utils/iconsThin";

export const ModuleIcon = () => {
  return (
    <div
      className={`w-16 p-4 mx-auto mt-12 mb-20 text-white ${textfile.backgroundColor} rounded-2xl`}
    >
      {textfile.svg}
    </div>
  );
};
