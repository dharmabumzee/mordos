import React from "react";

export const Icon = ({ svg, backgroundColor, onClick }) => {
  const styles = `${backgroundColor} flex items-center cursor-pointer backdrop-blur-xl transition duration-500 ease-in-out transform hover:shadow-3xl hover:transition-all hover:-translate-y-1 hover:scale-110 justify-center w-24 h-24 rounded-xl shadow-2xl hover:border hover:border-sky-100`;

  return (
    <div onClick={onClick} className={styles}>
      {svg}
    </div>
  );
};
