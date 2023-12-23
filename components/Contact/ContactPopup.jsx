import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const ContactPopup = ({ isOpen, onClose, emailContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Email Popup"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "50%",
          margin: "auto",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
        },
      }}
    >
      <h2>Email Content</h2>
      <p>{emailContent}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ContactPopup;
