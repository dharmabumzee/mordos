import React from "react";
import { searchIcon, closeIcon } from "../utils/icons";

const styles = {
  searchIcon: "absolute inset-0 w-4 h-4 m-auto ml-3 text-gray-600",
  input: "w-full appearance-none border border-grey rounded-lg pl-8 pr-4 py-2",
  container: "relative w-11/12 mx-auto mt-6",
  closeIcon:
    "absolute text-indigo-400 right-2 bottom-1.5 cursor-pointer transition-all hover:text-indigo-700",
};

const placeholder = "Search";
const type = "text";

export const SearchBar = ({ search, handleOnSearch, handleOnClick }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchIcon}>{searchIcon}</div>
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
