"use client";

import type React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import type { ImageModalProps } from "../../types/ImageModal.types";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
