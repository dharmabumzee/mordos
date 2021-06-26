import React, { useContext } from "react";
import { RenderLists } from "../TextEditor/RenderLists";
import { AppContext } from "../../context/AppContext";
import { InputSearch } from "../../components/InputSearch";
import { NavBarIcons } from "../TextEditor/NavBarIcons";
import {
  folderIconMenu,
  sortDescendingIcon,
  sortAscendingIcon,
  bookmarkIconMenu,
  trashcanIconMenu,
  folder,
} from "../../utils/icons";

export const FolderApp = () => {
  return (
    <div className="flex justify-center w-full">
      <section className="relative flex flex-col justify-center w-8/12 h-full pt-3 overflow-y-scroll bg-gray-50">
        <label className="px-3">{/* <InputSearch /> */}</label>
        <ul className="h-screen mt-6 bg-gray-100"></ul>
      </section>
      <div className="absolute z-50 rounded-lg right-4 -top-14 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        {folder.svg}
      </div>
    </div>
  );
};
