import { msg1, msg3 } from "../constant/shared";

const ContactUsModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div
        className={`w-full h-full bg-white bg-opacity-10 backdrop-blur-sm fixed z-10 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-500 ${
          showModal ? "block" : "hidden"
        }`}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className={`z-20 bg-gradient-to-br from-teal-600 to-teal-400 border border-white rounded-tl-[4rem] rounded-br-[4rem] shadow-custom-white w-2/3 h-3/4 fixed left-2/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition ease-in-out duration-500  max-sm:w-5/6 max-md:w-5/6 max-sm:h-4/6 max-md:h-4/6 max-sm:overflow-scroll max-md:overflow-scroll max-sm:overflow-x-hidden max-md:overflow-x-hidden ${
          showModal ? "top-1/2" : "top-[-600px]"
        }`}
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-text mx-0 my-9 ">
          Contact Us
        </h2>
        <div className="flex flex-col items-center mt-0 mb-8 mx-12">
          <p className="text-white text-2xl font-normal text-justify mb-8 drop-shadow-textSmall max-sm:text-center max-md:text-center">
            {msg1}
          </p>
          <p className="text-white text-2xl font-normal text-justify mb-8 drop-shadow-textSmall max-sm:text-center max-md:text-center">
            Feel free to reach out to us anytime at{" "}
            <a
              href="mailto:chandan2606kr@gmail.com"
              className="text-blue-800 bg-white pt-0 pb-1 px-2 rounded-xl"
            >
              chandan2606kr@gmail.com
            </a>{" "}
            Our team is dedicated to providing you with the best possible
            experience, and we're always happy to assist you.
          </p>
          <p className="text-white text-2xl font-normal text-center mb-8 drop-shadow-textSmall">
            {msg3}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
