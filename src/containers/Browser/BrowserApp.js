import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { CloseIcon } from "../../components/CloseIcon";
// import { BrowserAPI } from "./BrowserAPI";
import axios from "axios";
import { BrowserState as getInitialState } from "./BrowserState";

export const BrowserApp = () => {
  const windowSize = useWindowSize();
  const { initialStateSearchHistory } = getInitialState();

  const extractContent = /<a[^>]*>.*<\/a>/gm; // .replace , ""
  const extractTitle = /<a [^>]+>([^<]+)<\/a>/; // .match

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [searchHistory, setSearchHistory] = useState(initialStateSearchHistory);
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnClick = () => {
    setQuery("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchData(query);
  };

  const updateSearchHistory = () => {
    let searchShallowCopy = searchHistory.slice(1);
    setSearchHistory([...new Set([...searchShallowCopy, query])]);
  };

  const fetchData = async (query) => {
    let response = await axios.get(
      `https://cors-anywhere.herokuapp.com/api.duckduckgo.com/?q=${query}&format=json&pretty=1`
    );

    setResults(response.data.RelatedTopics);
    searchHistory.length === 9
      ? updateSearchHistory()
      : setSearchHistory([...new Set([...searchHistory, query])]);
  };

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  let toMap = results.length && results.filter((x) => x.Result);

  const toggleLeft = (index) => {
    if (windowSize.width >= 1200) {
      return index === 0
        ? 48
        : index === 1
        ? 72
        : index === 2
        ? 96
        : index === 3
        ? 120
        : index === 4
        ? 144
        : index === 5
        ? 168
        : index === 6
        ? 192
        : index === 7
        ? 216
        : index === 8
        ? 240
        : null;
    }
    if (windowSize.width < 1200) {
      return index === 0
        ? 40
        : index === 1
        ? 60
        : index === 2
        ? 80
        : index === 3
        ? 101
        : index === 4
        ? 120
        : index === 5
        ? 140
        : index === 6
        ? 160
        : index === 7
        ? 180
        : index === 8
        ? 200
        : null;
    }
  };

  return (
    <>
      <div className="relative ">
        <div
          className={` mx-auto ${
            windowSize.width > 768 ? "absolute z-50 w-1/2 right-8 -top-16" : ""
          } sm:px-8 lg:px-16 xl:px-20`}
        >
          <form onSubmit={handleOnSubmit}>
            <div className="relative flex items-center w-full p-3 pr-0 overflow-x-hidden bg-white border border-gray-200 active:bg-teal-50 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:shadow-lg focus:ring-indigo-500 focus:border-indigo-500 focus:ring-2 rounded-3xl">
              <button className="outline-none focus:outline-none">
                <svg
                  className="w-5 h-5 text-gray-600 cursor-pointer "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                onChange={handleOnChange}
                type="text"
                name="search"
                value={query}
                placeholder="search"
                className="w-full pl-4 text-sm bg-transparent outline-none focus:outline-none focus:ring-green-500 focus:border-indigo-500"
              />
              {query.length ? <CloseIcon handleOnClick={handleOnClick} /> : ""}
            </div>
          </form>
        </div>
      </div>
      {/* <BrowserAPI query={query} setResults={setResults} /> */}

      {/* <div className="w-full h-12 bg-gray-300 border border-gray-400 rounded-t-xl" /> */}
      <div className="w-full h-16 mt-5 bg-gray-100 border border-gray-300 relataive ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer left-8 top-5 hover:bg-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer left-20 top-5 hover:bg-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer top-5 left-32 hover:bg-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>

        {searchHistory.map((x, index) => (
          <button
            key={index}
            onClick={() => fetchData(x)}
            className={`absolute overflow-hidden z-10 w-32 h-12 transition-all ease-out transform bg-gray-300 hover:bg-gray-200 hover:border-gray-200 border-2 border-gray-300 shadow-md hover:-translate-y-1 focus:outline-none hover:shadow-2xl hover:scale-110 left-${toggleLeft(
              index
            )} rounded-t-xl top-4`}
          >
            {x}
          </button>
        ))}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer top-5 right-32 hover:bg-gray-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer top-5 right-20 hover:bg-gray-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 rounded-full cursor-pointer hover:bg-gray-200 top-5 right-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute left-0 z-40 w-full h-screen bg-white inset-y-1/5" />
      {/* <div className="absolute left-0 z-40 w-2/12 h-screen bg-orange-50 inset-y-1/5" /> */}

      <div
        id="results"
        className="relative z-40 grid-cols-1 gap-8 pt-12 m-auto my-5 lg:pt-44 place-items-center top-1/3 sgrid md:grid-cols-3"
      >
        <div className="z-40 flex flex-col items-center justify-center text-center hero-headline">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 ">
            Search results
          </h1>
          <p className="text-base text-gray-600 font-base">
            using DuckDuckGo API
          </p>
        </div>

        {toMap.length &&
          toMap.map((result, index) => {
            console.log(result.FirstURL);
            return (
              <React.Fragment key={index}>
                <a href={result.FirstURL} alt="url as a search results">
                  <div className="p-12 mx-auto space-y-2 transition-all border-2 cursor-pointer hover:bg-teal-50 lg:w-1/3 rounded-xl hover:rounded-2xl border-teal-50 hover:border-0 hover:shadow-xl">
                    <div className="font-semibold text-teal-600 ">
                      {result.Result && result.Result.match(extractTitle)[1]}
                    </div>

                    <p className="font-light content-content">
                      {result.Result &&
                        result.Result.replace(extractContent, "")}
                    </p>

                    <div>{result.Rtext}</div>
                  </div>
                </a>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

{
  /* <div className="p-12 font-light text-gray-500 transition-all">
  No search results. Try again
</div> */
}
