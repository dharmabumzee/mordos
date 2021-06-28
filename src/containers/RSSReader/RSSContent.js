import React, { useRef, useCallback } from "react";
import { FetchAPI as fetchAPI } from "../../components/FetchAPI";
import { LoadingPulse } from "../../components/LoadingPulse";
import { rss, commentIcon } from "../../utils/icons";
import { Search } from "../../components/Search";
import { RSSComment } from "../RSSReader/RSSComment";
import useWindowSize from "../../hooks/useWindowSize";

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

  const windowSize = useWindowSize();
  const rssFeedWidth = windowSize.width > 768 ? "rss-feed-width" : "";

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
    <main className="flex h-screen overflow-x-hidden window-height rounded-3xl">
      <div className="absolute rounded-lg bg-gradient-to-r from-red-500 to-yellow-600 right-4 -top-14">
        {rss.svg}
      </div>
      <div className="hidden my-6 sm:mx-4 lg:mx-auto textarea-height md:flex ">
        <div
          onClick={() => {
            clearSearch(defaultComments);
          }}
          className="flex h-10 p-2 rounded-lg cursor-pointer hover:text-red-50 bg-gradient-to-r hover:from-red-500 hover:to-yellow-600"
        >
          {commentIcon}{" "}
          <span className="ml-2 text-base font-medium ">ALL COMMENTS</span>
        </div>
      </div>

      <section
        className={`flex flex-col h-full pt-3 overflow-y-scroll shadow-inner rounded-t-3xl ${rssFeedWidth} bg-gray-50`}
      >
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
      </section>
    </main>
  );
};
