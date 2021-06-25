import React, { useState, useContext } from "react";
import {
  createIcon,
  deleteIcon,
  downloadIcon,
  bookmarkIcon,
  bookmarkIconFilled,
} from "../../utils/icons";
import { AppContext as TextEditorContext } from "../../context/AppContext";
import { SaveFile } from "./SaveFile";

const styles =
  "w-6 h-6 flex items-center hover:text-indigo-500 cursor-pointer backdrop-blur-xl transition duration-500 ease-in-out transform hover:shadow-3xl hover:transition-all hover:-translate-y-1 hover:scale-110 rounded-xl shadow-2xl";

export const NoteIcons = ({ id }) => {
  const {
    editNote,
    deleteNote,
    bookmarkNote,
    bookmarkedNotes,
    savedNotes,
    file,
    fileToSave,
  } = useContext(TextEditorContext);

  // const [file, setFile] = useState(null);

  const isItBookmarked = (id) => {
    return bookmarkedNotes.some((x) => x.id === id);
  };

  // const fileToSave = (id) => {
  //   let note = savedNotes.filter((note) => note.id === id);
  //   setFile(note);
  // };

  return (
    <>
      <ul className="flex space-x-4 text-gray-400">
        <li onClick={() => editNote(id)} className={styles}>
          {createIcon}
        </li>
        <li onClick={() => fileToSave(id)} className={styles}>
          {downloadIcon}
        </li>
        {/* <li className={styles} onClick={() => fileToSave(id)}></li> */}
        <li onClick={() => deleteNote(id)} className={styles}>
          {deleteIcon}
        </li>
        <li
          onClick={() => {
            bookmarkNote(id);
          }}
          className={`${styles} `}
          // ${icon ? "text-indigo-600" : ""}
        >
          {isItBookmarked(id) ? (
            <span className="text-indigo-600 current-fill">
              {bookmarkIconFilled}
            </span>
          ) : (
            bookmarkIcon
          )}
        </li>
        <SaveFile file={file} />
      </ul>
    </>
  );
};
