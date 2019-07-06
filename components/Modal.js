import React from "react";
import ReactModal from "react-modal";

import { globalBorder } from "../constants";
import background from "../img/grafika/pozadi-02.jpeg";

const maxStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: "10000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
  },
  content: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "2rem",
    opacity: "1",
    border: globalBorder,
    width: "95%",
    height: "95vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
    flexDirection: "column",
    overflow: "-moz-scrollbars-none"
  }
};

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  appElement,
  component,
  onClick
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
      style={maxStyles}
      closeTimeoutMS={200}
    >
      {component}
    </ReactModal>
  );
};

export default Modal;
