import "./styles/contactUsModal.css";

const ContactUsModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div
        className={`ModalOverlay ${showModal ? "activeModalOverlay" : ""}`}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={`contact-us-modal ${showModal ? "active-modal" : ""}`}>
        <h2 className="modal-heading">Contact Us</h2>
      </div>
    </>
  );
};

export default ContactUsModal;
