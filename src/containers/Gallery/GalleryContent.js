import React, { useState, useContext } from "react";
import { gallery, deleteImage, shareIcon } from "../../utils/iconsThin";
import { AppContext } from "../../context/AppContext";
import { GalleryFetched as galleryFetched } from "./GalleryFetched";

const cardStyles =
  "transition-all block transform cursor-pointer rounded-2xl hover:shadow-3xl hover:border group-hover:scale-101";

export const GalleryContent = () => {
  const { photos } = useContext(AppContext);
  const { fetchedPhotos } = galleryFetched();

  const [filterPhotosBy, setFilterPhotosBy] = useState("All");

  let myPhotos = photos.map((photo, index) => ({ photo, id: index + 1 }));

  const deletePhoto = (id) => {
    console.log(id);
  };

  const sharePhoto = (id) => {
    console.log(id);
  };

  return (
    <>
      <main className="p-12 overflow-y-auto window-height">
        <div className="flex flex-col items-center justify-center mx-4 my-4">
          <div
            className={`${gallery.backgroundColor} w-32 h-32 mb-4 m-auto rounded-full`}
          >
            {gallery.svg}
          </div>

          <h2 className="font-bold text-gray-700">Gallery</h2>
        </div>
        <div className="my-6">
          <ul className="flex flex-row items-center justify-center">
            <li>
              <button
                onClick={() => setFilterPhotosBy("All")}
                type="button"
                className="flex flex-col items-center justify-center w-16 h-16 p-2 m-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-blue-100 focus:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs font-semibold">All</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilterPhotosBy("Mine")}
                type="button"
                className="flex flex-col items-center justify-center w-16 h-16 p-2 m-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-blue-100 focus:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <p className="text-xs font-semibold">Mine</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilterPhotosBy("Fetch'd")}
                type="button"
                className="flex flex-col items-center justify-center w-16 h-16 p-2 m-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-blue-100 focus:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <p className="text-xs font-semibold">Fetch'd</p>
              </button>
            </li>
          </ul>
        </div>

        <div className="my-4"></div>
        <div className="">
          <ul className="relative grid grid-cols-1 gap-4 my-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {(filterPhotosBy === "Mine" || filterPhotosBy === "All") &&
              myPhotos.map(({ photo, id }) => {
                return (
                  // add masonry-ish grid instead flex
                  <div
                    className="relative flex justify-center w-full h-full group"
                    key={id}
                  >
                    <img
                      className={cardStyles}
                      src={photo}
                      alt=""
                      loading="lazy"
                    />
                    <span onClick={() => deletePhoto(id)}>{deleteImage}</span>
                    <span onClick={() => sharePhoto(id)}>{shareIcon}</span>
                  </div>
                );
              })}
            {(filterPhotosBy === "Fetch'd" || filterPhotosBy === "All") &&
              fetchedPhotos.map(({ url, id }) => {
                return (
                  <div
                    className="relative flex justify-center w-full h-full group"
                    key={id}
                  >
                    <img className={cardStyles} src={url} alt="" />
                    <span onClick={() => deletePhoto(id)}>{deleteImage}</span>
                  </div>
                );
              })}
          </ul>
        </div>
      </main>
    </>
  );
};
