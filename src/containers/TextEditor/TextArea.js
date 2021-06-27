import React, { useContext } from "react";
import { Title } from "./Title";
import { TextAreaHeadline } from "./TextAreaHeadline";
import { SaveButton } from "./SaveButton";
import { TextBody } from "./TextBody";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const TextArea = ({ state, setState, id, setId }) => {
  const { savedNotes, setSavedNotes, setEditMode } = useContext(
    TextEditorContext
  );

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
    let postToEdit = savedNotes.find((note) => note.id === state.id);
    let filteredNotes = savedNotes.filter((note) => note.id !== state.id);
    setSavedNotes(filteredNotes);

    setSavedNotes((prevState) => [
      ...prevState,
      { ...state, date: postToEdit.date, edit: Date.now() },
    ]);

    setState({
      title: "",
      text: "",
      id: id,
    });
    setEditMode(false);
  };

  return (
    <>
      <div className="flex flex-col w-full px-4 bg-white md:w-6/12 rounded-r-3xl">
        <TextAreaHeadline />
        <Title handleOnChange={handleOnChange} title={state.title} />
        <div className="mt-6 mb-3 border rounded-xl bg-gray-50">
          <TextBody handleOnChange={handleOnChange} text={state.text} />
          <SaveButton saveNotes={saveNotes} saveOnEditNote={saveOnEditNote} />
        </div>
      </div>
    </>
  );
};
