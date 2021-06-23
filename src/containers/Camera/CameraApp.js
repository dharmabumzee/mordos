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

export const CameraApp = () => {
  const windowSize = useWindowSize();
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
      }, 1000);
  };

  return (
    <div
      className={`w-full m-auto relative flex items-stretch overflow-y-hidden  flex-col justify-between flex-grow overflow-x-hidden ${
        windowSize.height < 360 ? "h-screen" : "photo-app"
      } `}
    >
      <div className="flex h-full mx-auto">
        <div className="relative flex flex-col items-center justify-start w-full camera-height">
          <video
            ref={videoRef}
            className="object-contain w-full h-auto max-w-full mb-12 xl:w-5/6 3xl:w-full lg:mb-0 "
          ></video>
          <TakePhotoButton takePhoto={takePhoto} hasPhoto={hasPhoto} />
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
