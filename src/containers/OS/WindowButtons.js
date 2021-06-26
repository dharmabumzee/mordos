import React from "react";

export const WindowButtons = ({
  toggleModal,
  closeButtonRef,
  isMax,
  setIsMax,
}) => {
  return (
    <div className="absolute flex flex-row left-6">
      <button
        ref={closeButtonRef}
        onClick={() => {
          toggleModal();
        }}
        className="relative w-4 h-4 p-1 mr-2 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600 group focus:outline-none"
        aria-label="Close"
      />
      <button
        onClick={toggleModal}
        className="w-4 h-4 p-1 mr-2 text-white bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 focus:outline-none"
        aria-label="Restore Down"
      />
      <button
        onClick={() => setIsMax(!isMax)}
        className="w-4 h-4 p-1 mr-5 text-white bg-green-500 rounded-full cursor-pointer hover:bg-green-600 focus:outline-none"
        aria-label="Minimize"
      />
    </div>
  );
};
