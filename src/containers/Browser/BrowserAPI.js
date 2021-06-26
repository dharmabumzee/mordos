import React, { useState, useEffect } from "react";
import axios from "axios";

export const BrowserAPI = ({ query, setResults }) => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `http://localhost:5000/api.duckduckgo.com/?q=${query}&format=json&pretty=1`
        )
        .then((res) => res.json())
        .then((data) => setResults(data.RelatedTopics));
    };

    fetchData();
  }, [query]);

  return {};
};
