import React, { useContext } from "react";
import {
  createIcon,
  deleteIcon,
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
    file,
    setSearch,
    setWhatToList,
    setState,
    getLastId,
    setEditMode,
    savedNotes,
    editMode,
  } = useContext(TextEditorContext);

  const isItBookmarked = (id) => {
    return bookmarkedNotes.some((note) => note.id === id);
  };

  const clearEdit = () => {
    setEditMode(false);
    setState({
      title: "",
      text: "",
      id: getLastId(savedNotes) + 1,
    });
  };

  return (
    <>
      <ul className="flex space-x-1 text-gray-400 md:space-x-4">
        <li
          onClick={() => (editMode ? clearEdit() : editNote(id))}
          className={styles}
        >
          {createIcon}
        </li>
        <li className={`${styles} `}>
          <SaveFile file={file} id={id} />
        </li>

        <li
          onClick={() => {
            deleteNote(id);
            setSearch("");
            setWhatToList({
              all: true,
              bookmarks: false,
              listDesc: false,
              listAsc: false,
            });
            setEditMode(false);
            setState({
              title: "",
              text: "",
              date: "",
              id: getLastId(savedNotes) + 1,
            });
          }}
          className={styles}
        >
          {deleteIcon}
        </li>
        <li
          onClick={() => {
            bookmarkNote(id);
          }}
          className={`${styles} `}
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
