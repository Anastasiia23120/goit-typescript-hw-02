import type React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { RxCross2 } from "react-icons/rx";
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
        <RxCross2 />
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
