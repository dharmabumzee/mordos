import React, { useContext } from "react";
import { LastEditedIcon } from "./LastEditedIcon";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const SaveButton = ({ saveNotes, saveOnEditNote }) => {
  const {
    setWhatToList,
    editMode,
    state,
    setState,
    setEditMode,
    savedNotes,
    id,
  } = useContext(TextEditorContext);

  let noteToEdit = savedNotes.filter((note) => note.id === state.id);

  return (
    <div className="flex items-center justify-between p-2">
      <LastEditedIcon editMode={editMode} lastEdit={noteToEdit} />
      <div>
        {editMode ? (
          <button
            onClick={() => {
              setState({ title: "", text: "", id: id });
              setEditMode(false);
            }}
            className="px-6 py-2 mr-4 text-gray-500 bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-xl"
          >
            Cancel
          </button>
        ) : null}
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
          className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
};
