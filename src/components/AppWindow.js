import React, { useState } from "react";
import { Icon } from "./Icon";
import Modal from "./Modal";

export const AppWindow = ({ svg, backgroundColor, content, title }) => {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Icon svg={svg} backgroundColor={backgroundColor} onClick={toggleModal} />
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
