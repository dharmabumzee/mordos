import { useState, useEffect } from "react";
import axios from "axios";

export const FetchAPI = () => {
  const [comments, setComments] = useState([]);
  const [defaultComments, setDefaultComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState(comments);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=0&_limit=10`)
      .then((res) => setDefaultComments(res.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=${pageSize}`
      )
      .then((res) => {
        setComments((prevComments) => {
          return [...new Set([...prevComments, ...res.data])];
        });
        setFilteredComments((prevFilteredComments) => {
          return [...new Set([...prevFilteredComments, ...res.data])];
        });

        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, [pageNumber]);

  const clearSearch = (arr) => {
    setFilteredComments(arr);
    setSearch("");
  };

  return {
    loading,
    error,
    hasMore,
    search,
    setSearch,
    setPageNumber,
    comments,
    setComments,
    defaultComments,
    filteredComments,
    setFilteredComments,
    clearSearch,
  };
};
