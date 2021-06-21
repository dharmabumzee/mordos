import React from "react";
import { SearchBar } from "../containers/SearchBar";

export const Search = ({
  props,
  search,
  setSearch,
  setFilteredComments,
  setPageNumber,
  clearSearch,
}) => {
  const isIncluded = (str, searchTerm) => {
    return str.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleOnSearch = (e) => {
    let searchValue = e.target.value;
    setSearch(e.target.value);
    let temporaryFilteredComments = props.filter((comment) => {
      return (
        isIncluded(comment.name, searchValue) ||
        isIncluded(comment.email, searchValue) ||
        isIncluded(comment.body, searchValue)
      );
    });
    e.target.value !== ""
      ? setFilteredComments(temporaryFilteredComments)
      : setFilteredComments(props);
    setPageNumber(1);
  };

  const handleOnClick = () => {
    clearSearch(props);
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
