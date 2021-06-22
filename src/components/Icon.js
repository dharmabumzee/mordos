import React from "react";

export const Icon = ({ svg, onClick, styles }) => {
  return (
    <div onClick={onClick} className={styles}>
      {svg}
    </div>
  );
};
