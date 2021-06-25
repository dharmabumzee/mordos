import { useContext } from "react";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const SortedList = () => {
  const { savedNotes } = useContext(TextEditorContext);

  let copyToAsc = [...savedNotes];
  let copyToDesc = [...savedNotes];

  let sortedListAsc = copyToAsc.sort((x, y) => x.date - y.date);
  let sortedListDesc = copyToDesc.sort((x, y) => y.date - x.date);

  return { sortedListAsc, sortedListDesc };
};
