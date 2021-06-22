import React from "react";

export const RSSComment = ({ name, email, body }) => {
  return (
    <>
      <div className="flex items-start mb-4 text-sm">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="text-xs text-grey">{email}</span>
          </div>
          <p className="leading-normal text-black">{body}</p>
        </div>
      </div>
    </>
  );
};
