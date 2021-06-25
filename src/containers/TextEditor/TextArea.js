import React, { useContext } from "react";
import { Title } from "./Title";
import { TextAreaHeadline } from "./TextAreaHeadline";
import { SaveButton } from "./SaveButton";
import { TextBody } from "./TextBody";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const TextArea = ({ state, setState, id, setId }) => {
  const { savedNotes, setSavedNotes, editMode, setEditMode } = useContext(
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
    let filteredNotes = savedNotes.filter((note) => note.id !== state.id);

    setSavedNotes(filteredNotes);
    console.log(savedNotes);
    setSavedNotes((prevState) => [
      ...prevState,
      { ...state, date: Date.now() },
    ]);
    setState({
      title: "",
      text: "",
      id: id,
      // setId(id + 1);
      // setState({
      //   title: "",
      //   text: "",
      //   id: id + 1,
    });
    setEditMode(false);
  };

  console.log(state);

  console.log("TextArea i EditMode: ", editMode);

  return (
    <>
      <div className="flex flex-col w-6/12 px-4 bg-white rounded-r-3xl">
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
