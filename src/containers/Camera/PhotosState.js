export const PhotosState = () => {
  const localStorageImages = localStorage.getItem("photos");
  const localStoragePhotos = localStorageImages
    ? JSON.parse(localStorageImages)
    : [];

  return { localStoragePhotos };
};
