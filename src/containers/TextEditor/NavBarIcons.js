import React from "react";
import {
  trashcanIconMenu,
  folderIconMenu,
  bookmarkIconMenu,
  sortDescendingIcon,
  sortAscendingIcon,
} from "../../utils/icons";

const iconMenuStyle =
  "w-16 transition-all p-4 mb-4 text-gray-700 cursor-pointer rounded-2xl";

const activeStyle = "text-purple-900 bg-purple-100";
const passiveStyle = "border hover:bg-blue-50";

export const NavBarIcons = ({
  setWhatToList,
  whatToList,
  savedNotesLength,
  bookmarksLength,
}) => {
  return (
    <>
      <nav className="relative flex flex-col items-center py-4">
        <div
          onClick={() =>
            setWhatToList({
              all: true,
              bookmarks: false,
              listDesc: false,
              listAsc: false,
            })
          }
          className={`relative w-16 p-4 mb-4 ${
            whatToList.all ? activeStyle : passiveStyle
          } cursor-pointer rounded-2xl`}
        >
          {folderIconMenu}
          <span
            className={`${
              whatToList.all ? "" : "hidden"
            } absolute flex items-center transition-all justify-center w-6 h-6 p-2 text-white bg-red-600 rounded-full -top-2 -right-2`}
          >
            {savedNotesLength}
          </span>
        </div>

        <div
          onClick={() =>
            setWhatToList({
              all: false,
              bookmarks: false,
              listDesc: true,
              listAsc: false,
            })
          }
          className={`${iconMenuStyle} ${
            whatToList.listDesc ? activeStyle : passiveStyle
          }`}
        >
          {sortDescendingIcon}
        </div>
        <div
          onClick={() =>
            setWhatToList({
              all: false,
              bookmarks: false,
              listDesc: false,
              listAsc: true,
            })
          }
          className={`${iconMenuStyle} ${
            whatToList.listAsc ? activeStyle : passiveStyle
          }`}
        >
          {sortAscendingIcon}
        </div>
        <div
          onClick={() =>
            setWhatToList({
              all: false,
              bookmarks: true,
              listDesc: false,
              listAsc: false,
            })
          }
          className={`relative mb-24 ${iconMenuStyle} ${
            whatToList.bookmarks ? activeStyle : passiveStyle
          }`}
        >
          {bookmarkIconMenu}
          <span
            className={`${
              whatToList.bookmarks ? "" : "hidden"
            } absolute flex items-center transition-all justify-center w-6 h-6 p-2 text-white bg-red-600 rounded-full -top-2 -right-2`}
          >
            {bookmarksLength}
          </span>
        </div>

        <div className="w-16 p-4 mb-4 text-gray-700 border cursor-pointer rounded-2xl">
          {trashcanIconMenu}
        </div>
        {/* <div className={iconMenuStyle}>{settingsIconMenu}</div> */}
      </nav>
    </>
  );
};