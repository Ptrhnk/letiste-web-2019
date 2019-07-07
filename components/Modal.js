import React from "react";
import ReactModal from "react-modal";

import backgroundMid from "../img/grafika/pozadi-01-mid.png";
import { globalBorder } from "../constants";

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
    backgroundImage: `url(${backgroundMid})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "2rem",
    opacity: "1",
    border: globalBorder,
    width: "95%",
    height: "95vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
    flexDirection: "column",
    padding: "0"
  }
};

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  appElement,
  component
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      appElement={appElement}
      closeTimeoutMS={200}
      style={maxStyles}
    >
      {component}
    </ReactModal>
  );
};

export default Modal;
