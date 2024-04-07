import "./styles/contactUsModal.css";
import { msg1, msg3 } from "../constant/shared";

const ContactUsModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div
        className={`ModalOverlay ${showModal ? "activeModalOverlay" : ""}`}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={`contact-us-modal ${showModal ? "active-modal" : ""}`}>
        <h2 className="modal-heading">Contact Us</h2>
        <div className="message-div">
          <p className="message1">{msg1}</p>
          <p className="message2">Feel free to reach out to us anytime at <a href="mailto:chandan2606kr@gmail.com">chandan2606kr@gmail.com</a> Our team is dedicated to providing you with the best possible experience, and we're always happy to assist you.</p>
          <p className="message3">{msg3}</p>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
