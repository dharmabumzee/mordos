import React, { useContext } from "react";
import { RenderNote } from "./RenderNote";
import { InputSearch } from "../../components/InputSearch";
import { formatTimestamp } from "../../utils/formatTimestamp";
import { SortedList as useSortedLists } from "./SortedList";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const RenderLists = ({ savedNotes, bookmarkedNotes, whatToList }) => {
  // const { sortedListAsc, sortedListDesc } = useSortedLists();
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
      : renderCategory(savedNotes);
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
              date={formatTimestamp(date)}
              excerpt={text}
            />
          </React.Fragment>
        );
      })
    );
  };

  return (
    <>
      <section className="flex flex-col w-4/12 h-full pt-3 overflow-y-scroll bg-gray-50">
        <label className="px-3">
          <InputSearch />
        </label>
        <ul className="mt-6">{renderList()}</ul>
      </section>
    </>
  );
};

// console.log(date.toLocaleDateString('en-GB'));
