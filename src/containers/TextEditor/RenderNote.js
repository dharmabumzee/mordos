import React from "react";
import { NoteIcons } from "./NoteIcons";

export const RenderNote = ({ id, title, date, excerpt }) => {
  return (
    <>
      <li className="flex items-center justify-between px-3 py-5 transition border-b cursor-pointer group hover:bg-indigo-100">
        <div>
          <div className="flex flex-col items-start ">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="flex">
            <p className="text-gray-400 text-md">{date}</p>
            <div className="flex justify-between w-full">
              <div className="ml-4 italic text-gray-400 text-md">{excerpt}</div>
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
