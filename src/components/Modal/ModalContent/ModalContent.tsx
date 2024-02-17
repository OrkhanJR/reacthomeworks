/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";

type ModalContent = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
};

const ModalContent = ({ onClose, className }: ModalContent) => {
  return (
    <div className={className}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        provident ex dolorem harum facilis facere obcaecati rerum explicabo cum
        hic exercitationem ipsa esse quas consequuntur numquam, reprehenderit
        nam voluptate molestias? lorem
      </div>
      <button className="close_btn" onClick={onClose}></button>
    </div>
  );
};

export default ModalContent;
