import React from "react";
import { CurrentTime as getCurrentDate } from "../components/CurrentTime";

export const Date = () => {
  const { currentTime } = getCurrentDate();
  return (
    <>
      {currentTime.toLocaleDateString({
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </>
  );
};
