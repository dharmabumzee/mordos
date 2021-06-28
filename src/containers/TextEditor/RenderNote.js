import React, { useContext } from "react";
import { NoteIcons } from "./NoteIcons";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const RenderNote = ({ id, title, date, excerpt }) => {
  const { windowSize } = useContext(TextEditorContext);

  // const breakpoint = 24;

  const renderExcerpt = (excerpt, breakpoint) =>
    excerpt.length > breakpoint
      ? excerpt.substring(0, breakpoint) + "..."
      : excerpt;

  return (
    <>
      <li
        className={`flex items-center justify-between ${
          windowSize.width < 300 ? "px-1" : "px-2"
        } py-5 transition border-b cursor-pointer md:px-3 group hover:bg-indigo-100`}
      >
        <div>
          <div className="flex flex-col items-start ">
            <h3 className="text-xs font-semibold md:text-lg">
              {windowSize.width < 540 ? renderExcerpt(title, 8) : title}
            </h3>
          </div>
          <div className="flex">
            <p className="text-xs text-gray-400 lg:text-md">{date}</p>
            <div className="flex justify-between w-full">
              <div className="hidden ml-4 italic text-gray-400 lg:flex sm:text-xs md:text-md">
                {renderExcerpt(excerpt, 24)}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:inline-block">
          <NoteIcons id={id} />
        </div>
      </li>
    </>
  );
};
