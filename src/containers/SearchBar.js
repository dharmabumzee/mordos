import React from "react";
import { searchIcon, closeIcon } from "../utils/icons";

const styles = {
  searchIcon: "absolute inset-0 w-4 h-4 m-auto ml-4 text-gray-600",
  input:
    "w-full py-2 pl-10 text-sm text-gray-500 placeholder-gray-600 bg-gray-100 rounded focus:outline-none",
  container: "relative w-11/12 mx-auto mt-6",
  closeIcon:
    "absolute right-2 bottom-1.5 cursor-pointer transition-all hover:text-gray-700",
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
