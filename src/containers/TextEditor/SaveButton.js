import React, { useContext } from "react";
import { DummyIcon } from "./DummyIcon";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const SaveButton = ({ saveNotes, saveOnEditNote }) => {
  const { setWhatToList, editMode } = useContext(TextEditorContext);
  return (
    <div className="flex items-center justify-between p-2">
      <DummyIcon />
      <button
        onClick={() => {
          editMode ? saveOnEditNote() : saveNotes();
          // saveNotes();
          setWhatToList({
            all: true,
            bookmarks: false,
            listDesc: false,
            listAsc: false,
          });
        }}
        className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-xl"
      >
        Save
      </button>
    </div>
  );
};
