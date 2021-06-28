import React, { useContext } from "react";
import { LastEditedIcon } from "./LastEditedIcon";
import { AppContext as TextEditorContext } from "../../context/AppContext";
import { SaveButton } from "./SaveButton";
import { CancelButton } from "./CancelButton";

export const ActionButtons = ({ saveNotes, saveOnEditNote }) => {
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
        <CancelButton
          editMode={editMode}
          setState={setState}
          setEditMode={setEditMode}
          id={id}
        />
        <SaveButton
          editMode={editMode}
          saveOnEditNote={saveOnEditNote}
          saveNotes={saveNotes}
          setWhatToList={setWhatToList}
        />
      </div>
    </div>
  );
};
