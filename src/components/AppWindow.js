import React, { useState } from "react";
import { Icon } from "./Icon";
import Modal from "./Modal";

export const AppWindow = ({ svg, backgroundColor, content, title }) => {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const styles = `${backgroundColor} flex items-center cursor-pointer backdrop-blur-xl transition duration-500 ease-in-out transform hover:shadow-3xl hover:transition-all hover:-translate-y-1 hover:scale-110 justify-center w-24 h-24 rounded-xl shadow-2xl hover:border hover:border-sky-100`;

  return (
    <>
      <Icon
        svg={svg}
        backgroundColor={backgroundColor}
        onClick={toggleModal}
        styles={styles}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleModal={toggleModal}
        content={content}
        title={title}
      />
    </>
  );
};
