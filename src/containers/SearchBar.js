import React from "react";
import { closeIcon } from "../utils/icons";

const styles = {
  input:
    "w-full p-4 transition duration-200 bg-gray-100 rounded-lg focus:outline-none focus:ring-2",
  container: "relative w-11/12 mx-auto mt-6",
  closeIcon:
    "absolute text-indigo-400 right-2 bottom-3 cursor-pointer transition-all hover:text-indigo-700",
};

const placeholder = "Search...";
const type = "text";

export const SearchBar = ({ search, handleOnSearch, handleOnClick }) => {
  return (
    <>
      <div className={styles.container}>
        <input
          onChange={handleOnSearch}
          value={search}
          className={styles.input}
          type={type}
          placeholder={placeholder}
        />
        {search.length ? (
          <div onClick={handleOnClick} className={styles.closeIcon}>
            {closeIcon}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
