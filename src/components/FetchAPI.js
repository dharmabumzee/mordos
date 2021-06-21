import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoadingPulse } from "./LoadingPulse";
import { commentIcon } from "../utils/icons";
import { Search } from "./Search";

export const FetchAPI = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
        setFilteredComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const clearSearch = (arr) => {
    setFilteredComments(arr);
    setSearch("");
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="hidden h-screen mx-4 my-6 overflow-hidden border-r sm:flex ">
        <div
          onClick={() => clearSearch(comments)}
          className="flex h-10 p-2 rounded-lg cursor-pointer hover:bg-oldLace"
        >
          {commentIcon}{" "}
          <span className="ml-2 text-base font-medium ">ALL COMMENTS</span>
        </div>
      </div>
      <div className="col-span-2">
        <Search
          props={comments}
          search={search}
          setSearch={setSearch}
          setFilteredComments={setFilteredComments}
          setPageNumber={setPageNumber}
          clearSearch={clearSearch}
        />

        <div className="flex flex-col justify-center ">
          {filteredComments ? (
            filteredComments
              .filter((x, i) => i < 20)
              .map(({ postId, id, name, email, body }) => (
                <div key={id} className="flex flex-col px-8 py-6 border-b">
                  {/* #{postId} */}
                  <span>name: {name}</span>
                  <span>email: {email}</span>
                  <span>body: {body} </span>
                </div>
              ))
          ) : (
            <LoadingPulse />
          )}
        </div>
        {/* <LoadingPulse /> */}
      </div>
    </div>
  );
};
