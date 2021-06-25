export const TextEditorState = () => {
  const localStorageSavedNotes = localStorage.getItem("savedNotes");
  const initialStateSavedNotes = localStorageSavedNotes
    ? JSON.parse(localStorageSavedNotes)
    : [];

  const localStorageBookmarkedNotes = localStorage.getItem("bookmarkedNotes");
  const initialStateBookmarkedNotes = localStorageBookmarkedNotes
    ? JSON.parse(localStorageBookmarkedNotes)
    : [];

  return { initialStateSavedNotes, initialStateBookmarkedNotes };
};
