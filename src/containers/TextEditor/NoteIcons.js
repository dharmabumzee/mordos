import React, { useContext } from "react";
import {
  createIcon,
  deleteIcon,
  downloadIcon,
  bookmarkIcon,
  bookmarkIconFilled,
} from "../../utils/icons";
import { AppContext as TextEditorContext } from "../../context/AppContext";

const styles =
  "w-6 h-6 flex items-center hover:text-indigo-500 cursor-pointer backdrop-blur-xl transition duration-500 ease-in-out transform hover:shadow-3xl hover:transition-all hover:-translate-y-1 hover:scale-110 rounded-xl shadow-2xl";

export const NoteIcons = ({ id }) => {
  const { editNote, deleteNote, bookmarkNote, bookmarkedNotes } = useContext(
    TextEditorContext
  );

  const isItBookmarked = (id) => {
    return bookmarkedNotes.some((x) => x.id === id);
  };

  return (
    <>
      <ul className="flex space-x-4 text-gray-400">
        <li onClick={() => editNote(id)} className={styles}>
          {createIcon}
        </li>
        <li className={styles}>{downloadIcon}</li>
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
      </ul>
    </>
  );
};
