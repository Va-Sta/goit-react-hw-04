import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FiArrowDownCircle } from "react-icons/fi";
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, src, closeModal, info }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className={{
          base: css.modal,
          afterOpen: css.modalAfterOpen,
          beforeClose: css.modalBeforeClose,
        }}
        overlayClassName={{
          base: css.overlay,
          afterOpen: css.overlayAfterOpen,
          beforeClose: css.overlayBeforeClose,
        }}
        closeTimeoutMS={500}
      >
        <div className={css.imageContainer} onClick={closeModal}>
          <img className={css.image} src={src} />
          <p className={css.author}>author: {info.author}</p>
          <p className={css.description}>{info.description}</p>
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
