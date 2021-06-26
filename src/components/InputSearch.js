import React, { useContext } from "react";
import { AppContext as TextEditorContext } from "../context/AppContext";
import { closeIcon } from "../utils/icons";

const styles = {
  input:
    "w-full p-4 transition duration-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2",
  container: "relative w-11/12 mx-auto mt-6",
  closeIcon:
    "absolute text-indigo-400 right-2 bottom-3 cursor-pointer transition-all hover:text-indigo-700",
};

export const InputSearch = ({ data, setFilteredList }) => {
  const { setWhatToList, savedNotes, search, setSearch } = useContext(
    TextEditorContext
  );

  console.log(data);

  const handleOnChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const newFilter = data.filter(({ title, text }) => {
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (searchTerm === "") {
      setFilteredList(savedNotes);
      setWhatToList({
        all: true,
        bookmarks: false,
        listDesc: false,
        listAsc: false,
      });
    } else {
      setFilteredList(newFilter);
      setWhatToList({
        all: false,
        bookmarks: false,
        listDesc: false,
        listAsc: false,
      });
    }
  };
  return (
    <div className="relative">
      <input
        value={search}
        onChange={handleOnChange}
        className="w-full p-4 transition duration-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2"
        placeholder="Search..."
      />
      {search.length ? (
        <div
          onClick={() => {
            setSearch("");
            setWhatToList({
              all: true,
              bookmarks: false,
              listDesc: false,
              listAsc: false,
            });
          }}
          className={styles.closeIcon}
        >
          {closeIcon}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
