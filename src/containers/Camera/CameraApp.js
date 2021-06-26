import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { AppContext } from "../../context/AppContext";
import { CameraAdjustments } from "./CameraAdjustments";
import { OnClickOutside } from "../../utils/OnClickOutside";
import useWindowSize from "../../hooks/useWindowSize";
import { TakePhotoButton } from "./TakePhotoButton";
import { AcceptAndCloseButtons } from "./AcceptAndCloseButtons";
import { SizeAdjustButton } from "./SizeAdjustButton";
import { CameraModuleIcon } from "./CameraModuleIcon";
import { Canvas } from "./Canvas";
import { cameraPlaceholder } from "../../utils/icons";

export const CameraApp = () => {
  const windowSize = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);

  const { photos, setPhotos, closeWindow } = useContext(AppContext);
  const [cameraStream, setCameraStream] = useState(null);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoDimension, setPhotoDimension] = useState({
    width: 414,
    height: 232.875, // width / ( 16 / 9) ratio
  });

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [show, setShow] = useState(false);
  const togglePopover = () => {
    setShow(!show);
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        setCameraStream(video);
        video.play();
        return new Promise(
          (resolve) =>
            (video.onplaying = resolve) &&
            setTimeout(() => {
              setIsLoading(false);
            }, 1000)
        );
      })
      .catch((err) => console.error(err));
  };

  const takePhoto = () => {
    let video = videoRef.current;
    let photo = photoRef.current;

    const width = photoDimension.width;
    const height = photoDimension.height;

    photo.width = width;
    photo.height = height;

    let context = photo.getContext("2d");
    context.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
  };

  const closePhotoTaken = () => {
    let photo = photoRef.current;
    let context = photo.getContext("2d");

    context.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  const acceptPhotoTaken = () => {
    let photo = photoRef.current;
    let imgFromData = photo.toDataURL("image/jpeg");

    setHasPhoto(true);
    setPhotos([...photos, imgFromData]);
  };

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photos));
  }, [photos]);

  useEffect(() => {
    return !closeWindow && cameraStream.srcObject.getTracks()[0].stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeWindow]);

  const ratioRef = useRef();
  OnClickOutside(ratioRef, () => setShow(false));

  const handlePopoverOpen = () => {
    setShow(true);
  };

  const [didMouseLeave, setDidMouseLeave] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isClicked = useCallback(() => setClicked(!clicked), [clicked]);

  const handlePopoverClose = () => {
    !didMouseLeave &&
      !clicked &&
      setTimeout(() => {
        setShow(!show);
      }, 5000);
  };

  return (
    <div
      className={`w-full m-auto relative flex items-stretch overflow-y-hidden  flex-col justify-between transition-all flex-grow overflow-x-hidden ${
        windowSize.height < 360 ? "h-screen" : "photo-app"
      } `}
    >
      <div className="flex h-full mx-auto">
        <div className="relative flex flex-col items-center justify-start w-full space-y-4 transition-all camera-height">
          <div
            className={`${
              isLoading
                ? "absolute z-50 w-screen h-screen transition-all transition-transform ease-in-out bg-gray-900"
                : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto space-y-4 text-gray-800 transition-all bg-gray-900 lg:mt-0 animate-pulse animate-ping opacity-40">
              {cameraPlaceholder.svg}
              <span className="text-6xl font-black 3xl:text-9xl">
                CAMERA APP
              </span>
            </div>
          </div>
          <video
            ref={videoRef}
            className="object-contain w-full h-auto max-w-full mb-12 transition-all xl:w-5/6 3xl:w-full lg:mb-0 "
          ></video>
          {isLoading ? null : (
            <TakePhotoButton takePhoto={takePhoto} hasPhoto={hasPhoto} />
          )}
        </div>

        <Canvas hasPhoto={hasPhoto} photoRef={photoRef}>
          <AcceptAndCloseButtons
            acceptPhotoTaken={acceptPhotoTaken}
            closePhotoTaken={closePhotoTaken}
            hasPhoto={hasPhoto}
          />
        </Canvas>

        <SizeAdjustButton
          togglePopover={togglePopover}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          setDidMouseLeave={setDidMouseLeave}
          hasPhoto={hasPhoto}
        />
        <CameraAdjustments
          ratioRef={ratioRef}
          show={show}
          photoDimension={photoDimension}
          setPhotoDimension={setPhotoDimension}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          setDidMouseLeave={setDidMouseLeave}
          togglePopover={togglePopover}
          isClicked={isClicked}
          clicked={clicked}
        />

        <CameraModuleIcon hasPhoto={hasPhoto} />
      </div>
    </div>
  );
};
