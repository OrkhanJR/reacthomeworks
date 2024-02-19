import ModalContent from "../ModalContent/ModalContent";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalWindow = () => {
  const modal = document.querySelector("#modal") as HTMLElement;
  const bodyTag = document.querySelector("body") as HTMLElement;

  const [showModal, setShowModal] = useState(false);
  //Эта часть с prevShowModal нужна чтобы сразу при рендере не выводилось сообщение о том что модальное окно закрыто
  const [prevShowModal, setPrevShowModal] = useState(false);

  useEffect(() => {
    if (prevShowModal !== showModal) {
      if (showModal) {
        console.log("Modal opened");
      } else {
        console.log("Modal closed");
      }
      setPrevShowModal(showModal);
    }
  }, [showModal, prevShowModal]);



  const modalWindow = () => {
    if (showModal) {
      bodyTag.classList.add("background-active");
      return createPortal(
        <ModalContent
          onClose={() => setShowModal(false)}
          className="modalContent"
        />,
        modal
      );
    } else {
      bodyTag.classList.remove("background-active");
      bodyTag.classList.add("background-disable");
      return null;
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>
      {modalWindow()}
    </>
  );
};

export default ModalWindow;
