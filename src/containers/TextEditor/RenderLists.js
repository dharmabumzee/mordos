import React, { useContext, useEffect, useState } from "react";
import { RenderNote } from "./RenderNote";
import { InputSearch } from "../../components/InputSearch";
import { formatDate } from "../../utils/formatTimestamp";
import { AppContext as TextEditorContext } from "../../context/AppContext";
import { RenderAllPostsDraggable } from "./RenderAllPostsDraggable";

export const RenderLists = ({
  savedNotes,
  bookmarkedNotes,
  setBookmarkedNotes,
  setSavedNotes,
  whatToList,
}) => {
  const [filteredList, setFilteredList] = useState(savedNotes);

  const { sortedListAsc, sortedListDesc } = useContext(TextEditorContext);

  const renderList = () => {
    return whatToList.all === true ? (
      <RenderAllPostsDraggable
        savedList={savedNotes}
        setSavedList={setSavedNotes}
      />
    ) : whatToList.bookmarks === true ? (
      <RenderAllPostsDraggable
        savedList={bookmarkedNotes}
        setSavedList={setBookmarkedNotes}
      />
    ) : whatToList.listDesc === true ? (
      renderCategory(sortedListDesc)
    ) : whatToList.listAsc === true ? (
      renderCategory(sortedListAsc)
    ) : (
      renderCategory(filteredList)
    );
  };

  const renderCategory = (category) => {
    return (
      category &&
      category.length > 0 &&
      category.map(({ id, title, text, date }) => {
        return (
          <React.Fragment key={id}>
            <RenderNote
              id={id}
              title={title}
              date={formatDate(date)}
              excerpt={text}
            />
          </React.Fragment>
        );
      })
    );
  };

  console.log(savedNotes);

  useEffect(() => {
    setFilteredList(savedNotes);
  }, [savedNotes]);

  const passData = () =>
    whatToList.bookmarks === true ? bookmarkedNotes : savedNotes;

  return (
    <>
      <section className="flex flex-col w-11/12 h-full pt-3 mx-auto overflow-y-scroll shadow-inner rounded-3xl sm:w-5/12 md:w-4/12 lg:w-4/12 xl:w-4/12 bg-gray-50">
        <label className="px-3">
          <InputSearch
            data={passData()}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
            whatToList={whatToList}
          />
        </label>
        <ul className="mt-6">{renderList()}</ul>
      </section>
    </>
  );
};
