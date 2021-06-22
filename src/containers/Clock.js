import React from "react";
import { CurrentTime as getCurrentTime } from "../components/CurrentTime";

export const Clock = () => {
  const { currentTime } = getCurrentTime();

  return (
    <div className="absolute font-light opacity-60 text-gray-600 top-1.5 right-1 ">
      {currentTime.toLocaleString([], { hour: "2-digit", minute: "2-digit" })}
      <span className="ml-1 text-gray-600 sm:text-xs 3xl:text-sm ">
        {currentTime.toLocaleDateString({
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>
  );
};
