import React from "react";
import ReactModal from "react-modal";

import { globalBorder } from "../constants";
import background from "../img/grafika/pozadi-02.jpeg";

const customStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    zIndex: "10000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "2rem",
    opacity: "1",
    border: globalBorder,
    width: "60%",
    height: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowY: "scroll"
    // -webkit-overflow-scrolling: "touch",
  }
};

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  appElement,
  component
}) => {
  var style = () => {
    if (window.innerWidth < 800) {
      return minStyles;
    } else {
      return maxStyles;
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      appElement={appElement}
      style={customStyle}
      closeTimeoutMS={200}
    >
      {component}
    </ReactModal>
  );
};

export default Modal;
