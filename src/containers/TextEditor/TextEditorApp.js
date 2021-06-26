import React, { useState, useEffect } from "react";
import { RenderLists } from "./RenderLists";
import { NavBarIcons } from "./NavBarIcons";
import { TextArea } from "./TextArea";
import { AppContext as TextEditorContext } from "../../context/AppContext";

import { ModuleIcon } from "./ModuleIcon";
import { TextEditorState as getInitialState } from "./TextEditorState";
import useWindowSize from "../../hooks/useWindowSize";

export const TextEditorApp = () => {
  const windowSize = useWindowSize();
  const [screenSwitch, setScreenSwitch] = useState(false);

  const {
    initialStateSavedNotes,
    initialStateBookmarkedNotes,
  } = getInitialState();
  const [id, setId] = useState(
    initialStateSavedNotes.length > 1
      ? initialStateSavedNotes[initialStateSavedNotes.length - 1].id + 1
      : 1
  );

  const [file, setFile] = useState(null);
  const [downloadAvailable, setDownloadAvailable] = useState(null);
  const fileToSave = (id) => {
    let note = savedNotes.filter((note) => note.id === id);
    setFile(note);
    setDownloadAvailable(id);
  };

  const [savedNotes, setSavedNotes] = useState(initialStateSavedNotes);
  const [state, setState] = useState({
    title: "",
    text: "",
    id: id,
  });

  const [bookmarkedNotes, setBookmarkedNotes] = useState(
    initialStateBookmarkedNotes
  );
  const [whatToList, setWhatToList] = useState({
    all: true,
    bookmarks: false,
    listDesc: false,
    listAsc: false,
  });

  const [editMode, setEditMode] = useState(false);
  const [search, setSearch] = useState("");

  const editNote = (id) => {
    setEditMode(true);
    savedNotes.map(
      (note) =>
        note.id === id &&
        setState({
          title: note.title,
          text: note.text,
          id: note.id,
          timestamp: note.timestamp,
        })
    );
  };

  const deleteNote = (id) => {
    let filteredNotes = (notes) => notes.filter((note) => note.id !== id);
    setSavedNotes(filteredNotes(savedNotes));
    setBookmarkedNotes(filteredNotes(bookmarkedNotes));
  };

  const bookmarkNote = (id) => {
    let bookmarkedNote = savedNotes.filter((note) => note.id === id)[0];
    bookmarkedNotes.includes(bookmarkedNote)
      ? setBookmarkedNotes(bookmarkedNotes.filter((note) => note.id !== id))
      : setBookmarkedNotes([...new Set([...bookmarkedNotes, bookmarkedNote])]);
  };

  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
  }, [savedNotes]);

  useEffect(() => {
    localStorage.setItem("bookmarkedNotes", JSON.stringify(bookmarkedNotes));
  }, [bookmarkedNotes]);

  let sortedListAsc;
  let sortedListDesc;
  if (savedNotes && savedNotes.length) {
    let copyToAsc = [...savedNotes];
    let copyToDesc = [...savedNotes];
    sortedListAsc = copyToAsc.sort((x, y) => x.date - y.date);
    sortedListDesc = copyToDesc.sort((x, y) => y.date - x.date);
  }

  return (
    <>
      <TextEditorContext.Provider
        value={{
          savedNotes,
          setSavedNotes,
          editNote,
          deleteNote,
          bookmarkNote,
          bookmarkedNotes,
          setWhatToList,
          editMode,
          setEditMode,
          sortedListAsc,
          sortedListDesc,
          file,
          fileToSave,
          downloadAvailable,
          setDownloadAvailable,
          search,
          setSearch,
          screenSwitch,
          setScreenSwitch,
          windowSize,
        }}
      >
        <div
          className={`flex w-full shadow-lg ${
            windowSize.width < 768 ? "pte-height-mobile" : "pte-height"
          } rounded-3xl`}
        >
          <div className="flex flex-col w-2/12 bg-white rounded-l-3xl">
            <ModuleIcon />
            <NavBarIcons
              setWhatToList={setWhatToList}
              whatToList={whatToList}
              savedNotesLength={savedNotes.length}
              bookmarksLength={bookmarkedNotes.length}
            />
          </div>
          {windowSize.width > 540 ? (
            <>
              <RenderLists
                savedNotes={savedNotes}
                bookmarkedNotes={bookmarkedNotes}
                whatToList={whatToList}
              />
              <TextArea
                state={state}
                setState={setState}
                savedNotes={savedNotes}
                setSavedNotes={setSavedNotes}
                id={id}
                setId={setId}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col w-full ">
                <TextArea
                  state={state}
                  setState={setState}
                  savedNotes={savedNotes}
                  setSavedNotes={setSavedNotes}
                  id={id}
                  setId={setId}
                />
                <RenderLists
                  savedNotes={savedNotes}
                  bookmarkedNotes={bookmarkedNotes}
                  whatToList={whatToList}
                />
              </div>
            </>
          )}
        </div>
      </TextEditorContext.Provider>
    </>
  );
};
