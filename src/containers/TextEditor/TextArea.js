import React, { useContext, useEffect } from "react";
import { Title } from "./Title";
import { TextAreaHeadline } from "./TextAreaHeadline";
import { ActionButtons } from "./ActionButtons";
import { TextBody } from "./TextBody";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const TextArea = ({ state, setState, id, setId }) => {
  const {
    savedNotes,
    setSavedNotes,
    setEditMode,
    bookmarkedNotes,
    setBookmarkedNotes,
  } = useContext(TextEditorContext);

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const saveNotes = () => {
    setSavedNotes([...savedNotes, { ...state, date: Date.now() }]);

    setId(id + 1);
    setState({
      title: "",
      text: "",
      id: id + 1,
    });
  };

  const saveOnEditNote = () => {
    let savedNotesToEdit = [...savedNotes];

    let savedNoteToEdit = savedNotesToEdit.find((note) => note.id === state.id);

    let indexOfSavedNoteToEdit = savedNotesToEdit.findIndex(
      (note) => note.id === state.id
    );

    savedNotesToEdit.splice(indexOfSavedNoteToEdit, 1, {
      ...state,
      date: savedNoteToEdit.date,
      edit: Date.now(),
    });

    setSavedNotes(savedNotesToEdit);

    setState({
      title: "",
      text: "",
      id: id,
    });
    setEditMode(false);
  };

  useEffect(() => {
    let isActive = true;
    let sharedNotes = savedNotes.filter((x) =>
      bookmarkedNotes.find((y) => x.id === y.id)
    );
    if (isActive) {
      setBookmarkedNotes(sharedNotes);
    }

    return () => {
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedNotes]);

  return (
    <>
      <div className="flex flex-col w-full px-4 bg-white md:w-6/12 rounded-r-3xl">
        <TextAreaHeadline />
        <Title handleOnChange={handleOnChange} title={state.title} />
        <div className="mt-6 mb-3 border rounded-xl bg-gray-50">
          <TextBody handleOnChange={handleOnChange} text={state.text} />
          <ActionButtons
            saveNotes={saveNotes}
            saveOnEditNote={saveOnEditNote}
          />
        </div>
      </div>
    </>
  );
};
