import React, { useContext } from "react";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const TextBody = ({ handleOnChange, text }) => {
  const { windowSize } = useContext(TextEditorContext);

  return (
    <textarea
      onChange={handleOnChange}
      name="text"
      value={text}
      className={`w-full p-2 ${
        windowSize.width < 640 ? "" : "textarea-height"
      } bg-gray-50 rounded-xl focus:outline-none`}
      placeholder="Type here..."
    ></textarea>
  );
};
