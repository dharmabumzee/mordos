import React from "react";
import { closeIcon } from "../utils/icons";

const styles = {
  closeIcon:
    "absolute text-indigo-400 right-2 top-2.5 transition-all bottom-3 cursor-pointer transition-all hover:text-indigo-700",
};

export const CloseIcon = ({ handleOnClick }) => {
  return (
    <div onClick={handleOnClick} className={styles.closeIcon}>
      {closeIcon}
    </div>
  );
};
