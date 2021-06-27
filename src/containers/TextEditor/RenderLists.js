import React, { useContext, useEffect, useState } from "react";
import { RenderNote } from "./RenderNote";
import { InputSearch } from "../../components/InputSearch";
import { formatDate } from "../../utils/formatTimestamp";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const RenderLists = ({ savedNotes, bookmarkedNotes, whatToList }) => {
  const [filteredList, setFilteredList] = useState(savedNotes);

  const { sortedListAsc, sortedListDesc } = useContext(TextEditorContext);

  const renderList = () => {
    return whatToList.all === true
      ? renderCategory(savedNotes)
      : whatToList.bookmarks === true
      ? renderCategory(bookmarkedNotes)
      : whatToList.listDesc === true
      ? renderCategory(sortedListDesc)
      : whatToList.listAsc === true
      ? renderCategory(sortedListAsc)
      : renderCategory(filteredList);
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

  useEffect(() => {
    setFilteredList(savedNotes);
  }, [savedNotes]);

  const passData = () =>
    whatToList.bookmarks === true ? bookmarkedNotes : savedNotes;

  return (
    <>
      <section className="flex flex-col w-11/12 h-full pt-3 mx-auto overflow-y-scroll sm:w-1/12 md:w-2/12 lg:w-3/12 xl:w-4/12 bg-gray-50">
        {/* h-screen pt-3 md:overflow-y-scroll */}
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
