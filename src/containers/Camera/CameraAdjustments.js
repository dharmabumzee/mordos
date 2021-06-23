import React, { useState } from "react";

export const CameraAdjustments = ({
  show,
  setPhotoDimension,
  ratioRef,
  handlePopoverOpen,
  handlePopoverClose,
  setDidMouseLeave,
  togglePopover,
  isClicked,
  clicked,
}) => {
  const [checked, setChecked] = useState("menu-item-4");

  return (
    <div
      className={`${show ? "" : "hidden"}`}
      ref={ratioRef}
      onMouseEnter={() => {
        clicked && isClicked();
        setDidMouseLeave(false);
        handlePopoverOpen();
      }}
      onMouseLeave={() => {
        setDidMouseLeave(true);
        handlePopoverClose();
      }}
    >
      <div className="relative inline-block text-left transform rotate-180"></div>
      <div
        className="absolute z-50 w-32 transform rotate-180 bg-white rounded-md shadow-lg bottom-4 left-12 ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <div
            className={`${
              checked === "menu-item-1" ? "bg-blue-100" : ""
            } block px-4 py-2 text-sm text-gray-700 transform rotate-180 cursor-pointer hover:bg-blue-200`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={(e) => {
              setPhotoDimension({ width: 640, height: 640 });
              isClicked();
              setChecked(e.target.id);

              togglePopover();
            }}
          >
            640 x 640
          </div>
          <div
            className={`${
              checked === "menu-item-2" ? "bg-blue-100" : ""
            } block px-4 py-2 text-sm text-gray-700 transform rotate-180 cursor-pointer hover:bg-blue-200`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
            onClick={(e) => {
              setPhotoDimension({ width: 640, height: 480 });
              isClicked();
              setChecked(e.target.id);

              togglePopover();
            }}
          >
            640 x 480
          </div>
          <div
            className={`${
              checked === "menu-item-3" ? "bg-blue-100" : ""
            } block px-4 py-2 text-sm text-gray-700 transform rotate-180 cursor-pointer hover:bg-blue-200`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-3"
            onClick={(e) => {
              setPhotoDimension({ width: 600, height: 600 });
              isClicked();
              setChecked(e.target.id);

              togglePopover();
            }}
          >
            600 x 600
          </div>
          <div
            className={`${
              checked === "menu-item-4" ? "bg-blue-100" : ""
            } block px-4 py-2 text-sm text-gray-700 transform rotate-180 cursor-pointer hover:bg-blue-200`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-4"
            onClick={(e) => {
              setPhotoDimension({ width: 414, height: 232.875 });
              isClicked();
              setChecked(e.target.id);

              togglePopover();
            }}
          >
            414 x 232
          </div>
        </div>
      </div>
    </div>
  );
};
