import React, { useContext } from "react";
import { textfile } from "../../utils/iconsThin";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const ModuleIcon = () => {
  const { windowSize } = useContext(TextEditorContext);

  return (
    <div
      className={`z-10 w-10 md:w-16 p-2 ${
        windowSize.width < 540 ? "ml-4" : "ml-6"
      } md:p-4 md:mx-auto mt-8 md:mt-12 mb-20 text-white ${
        textfile.backgroundColor
      } rounded-2xl`}
    >
      {textfile.svg}
    </div>
  );
};
