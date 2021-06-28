import React from "react";

export const SaveButton = ({
  editMode,
  saveOnEditNote,
  saveNotes,
  setWhatToList,
}) => {
  return (
    <button
      onClick={() => {
        editMode ? saveOnEditNote() : saveNotes();
        setWhatToList({
          all: true,
          bookmarks: false,
          listDesc: false,
          listAsc: false,
        });
      }}
      className="px-1 py-2 text-white bg-indigo-500 md:px-6 hover:bg-indigo-600 focus:outline-none rounded-xl"
    >
      Save
    </button>
  );
};
