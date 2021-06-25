import React from "react";
import {
  createNote,
  saveNote,
  deleteNote,
  downloadNote,
} from "../../utils/icons";
import { Icon } from "../../components/Icon";

export const TextEditorIconMenu = () => {
  const styles = `relative flex items-center cursor-pointer backdrop-blur-xl transition duration-500 ease-in-out transform hover:shadow-3xl hover:transition-all hover:-translate-y-1 hover:scale-110 justify-center rounded-xl hover:shadow-2xl`;

  return (
    <div className="sticky top-0 z-40 flex items-center px-2 py-1 left-12 justify-evenly">
      <Icon
        svg={createNote}
        onClick={() => console.log("clicked")}
        styles={styles}
      />
      <Icon
        svg={saveNote}
        onClick={() => console.log("clicked")}
        styles={styles}
      />
      <Icon
        svg={downloadNote}
        onClick={() => console.log("clicked")}
        styles={styles}
      />
      <Icon
        svg={deleteNote}
        onClick={() => console.log("clicked")}
        styles={styles}
      />
    </div>
  );
};
