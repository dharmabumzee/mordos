import React, { useState } from "react";
import { RSSReader } from "./RSSReader/RSSReader";
import { TextEditor } from "./TextEditor/TextEditor";
import { Camera } from "./Camera/Camera";
import { Gallery } from "./Gallery/Gallery";
import { Browser } from "./Browser/Browser";
import { AppContext } from "../context/AppContext";
import { Redirect } from "react-router-dom";
import { PhotosState as getInitialPhotos } from "./Camera/PhotosState";

export const Desktop = ({ isAuthorized }) => {
  const { localStoragePhotos } = getInitialPhotos();

  const [photos, setPhotos] = useState(localStoragePhotos);
  const [closeWindow, setCloseWindow] = useState(false);
  const [minimizeWindow, setMinimizeWindow] = useState(false);
  const [fullscreenWindow, setFullscreenWindow] = useState(false);

  return (
    <>
      {!isAuthorized ? (
        <Redirect to="/login" />
      ) : (
        <div className="grid grid-cols-2 gap-6 p-12 transition-all place-items-center md:place-items-start md:grid-cols-1">
          <AppContext.Provider
            value={{
              photos,
              setPhotos,
              closeWindow,
              setCloseWindow,
              minimizeWindow,
              setMinimizeWindow,
              fullscreenWindow,
              setFullscreenWindow,
            }}
          >
            <TextEditor />
            <Camera />
            <Gallery />
            <RSSReader />
            <Browser />
          </AppContext.Provider>
        </div>
      )}
    </>
  );
};
