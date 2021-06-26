export const BrowserState = () => {
  const localStorageSearchHistory = localStorage.getItem("searchHistory");
  const initialStateSearchHistory = localStorageSearchHistory
    ? JSON.parse(localStorageSearchHistory)
    : [];

  return { initialStateSearchHistory };
};
