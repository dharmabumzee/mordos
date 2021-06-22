import React from "react";
import { SearchBar } from "../containers/SearchBar";

export const Search = ({
  props,
  search,
  setSearch,
  defaultComments,
  setFilteredComments,
  clearSearch,
}) => {
  const isIncluded = (str, searchTerm) => {
    return str.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleOnSearch = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);

    let temporaryFilteredComments = props.filter((comment) => {
      return (
        isIncluded(comment.name, searchValue) ||
        isIncluded(comment.email, searchValue) ||
        isIncluded(comment.body, searchValue)
      );
    });

    searchValue.length
      ? setFilteredComments(
          temporaryFilteredComments.length
            ? [...new Set([temporaryFilteredComments[0]])]
            : []
        )
      : setFilteredComments(defaultComments);
  };

  const handleOnClick = () => {
    clearSearch(defaultComments);
  };

  return (
    <>
      <SearchBar
        search={search}
        handleOnSearch={handleOnSearch}
        handleOnClick={handleOnClick}
      />
    </>
  );
};
