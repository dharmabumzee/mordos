import React, { useRef, useCallback } from "react";
import { commentIcon } from "../../utils/icons";
import { LoadingPulse } from "../../components/LoadingPulse";
import { Search } from "../../components/Search";
import { FetchAPI as fetchAPI } from "../../components/FetchAPI";
import { RSSComment } from "./RSSComment";

export const RSSContent = () => {
  const {
    loading,
    error,
    search,
    setSearch,
    setPageNumber,
    comments,
    filteredComments,
    setFilteredComments,
    clearSearch,
    hasMore,
    defaultComments,
  } = fetchAPI();

  const observer = useRef();
  const lastCommentRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );

  return (
    <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="hidden h-full mx-4 my-6 border-r sm:flex ">
        <div
          onClick={() => clearSearch(defaultComments)}
          className="flex h-10 p-2 rounded-lg cursor-pointer hover:bg-oldLace"
        >
          {commentIcon}{" "}
          <span className="ml-2 text-base font-medium ">ALL COMMENTS</span>
        </div>
      </div>

      <div className="h-full col-span-2 ">
        <Search
          props={comments}
          defaultComments={defaultComments}
          search={search}
          setSearch={setSearch}
          setFilteredComments={setFilteredComments}
          setPageNumber={setPageNumber}
          clearSearch={clearSearch}
        />

        <div className="flex flex-col justify-center ">
          {filteredComments.length
            ? [...new Set([...filteredComments])].map(
                ({ name, email, body }, index) => {
                  if (filteredComments.length === index + 1) {
                    return (
                      <div
                        key={index}
                        ref={lastCommentRef}
                        className="flex flex-col px-8 py-6 border-b"
                      >
                        <RSSComment name={name} email={email} body={body} />
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className="flex flex-col px-8 py-6 border-b"
                      >
                        <RSSComment name={name} email={email} body={body} />
                      </div>
                    );
                  }
                }
              )
            : ""}
          {loading && <LoadingPulse />}
          {error && "Error"}
        </div>
      </div>
    </div>
  );
};
