import React from "react";

export const CancelButton = ({ setState, editMode, id, setEditMode }) => {
  return (
    <>
      {editMode ? (
        <button
          onClick={() => {
            setState({ title: "", text: "", id: id });
            setEditMode(false);
          }}
          className="px-1 py-2 mr-4 text-gray-500 bg-gray-200 md:px-6 hover:bg-gray-300 focus:outline-none rounded-xl"
        >
          Cancel
        </button>
      ) : null}
    </>
  );
};
