import ModalContent from "../ModalContent/ModalContent";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const ModalWindow = () => {
  const modal = document.querySelector("#modal") as HTMLElement;
 
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} className="modalContent" />,
          document.body.appendChild(modal)
        )}
    </>
  );
};

export default ModalWindow;
