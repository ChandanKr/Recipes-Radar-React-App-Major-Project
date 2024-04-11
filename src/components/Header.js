import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMenuButton = () => {
    setIsMenuBtnClicked(false);
  };

  const handleContactUs = () => {
    setIsMenuBtnClicked(false);
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full max-w-full h-20 bg-black flex justify-between items-center px-20 py-0 border-b border-gray-400 border-opacity-45 z-10 sticky top-0 max-sm:px-10 max-md:px-10">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-40 px-1 transition ease-in duration-200 hover:shadow-custom"
            />
          </Link>
        </div>

        {/* Navigation Section for Large Devices */}
        <div>
          <ul className="flex list-none max-sm:hidden max-md:hidden">
            <Link to="/">
              <li className="text-white ml-8 text-[1.125rem] font-bold border-2 border-black px-3 py-1 rounded-tl-xl rounded-br-xl transition ease-in duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-custom-cyan">
                Home
              </li>
            </Link>

            <Link to="/filters">
              <li className="text-white ml-8 text-[1.125rem] font-bold border-2 border-black px-3 py-1 rounded-tl-xl rounded-br-xl transition ease-in duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-custom-cyan">
                Filters
              </li>
            </Link>

            <Link to="/about-us">
              <li className="text-white ml-8 text-[1.125rem] font-bold border-2 border-black px-3 py-1 rounded-tl-xl rounded-br-xl transition ease-in duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-custom-cyan">
                About Us
              </li>
            </Link>

            <li
              className="text-white ml-8 text-[1.125rem] font-bold border-2 border-black px-3 py-1 rounded-tl-xl rounded-br-xl transition ease-in duration-200 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-custom-cyan"
              onClick={() => setShowModal(true)}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Menu Button for Small Devices */}
        <div className="hidden max-sm:block max-md:block">
          {isMenuBtnClicked ? (
            <AiOutlineClose
              className="text-2xl text-red-500"
              onClick={() => setIsMenuBtnClicked(false)}
            />
          ) : (
            <FaAlignJustify
              className="text-white text-2xl hover:text-cyan-400"
              onClick={() => setIsMenuBtnClicked(true)}
            />
          )}
        </div>
      </div>

      {/* Navigation Section for Small Devices */}
      <div
        className={`transition ease-in-out duration-1000 fixed z-20 w-full ${
          isMenuBtnClicked ? "block" : "hidden"
        }`}
      >
        <ul className={`list-none hidden max-sm:flex max-md:flex flex-col`}>
          <Link to="/">
            <li
              className="bg-black text-white text-xl font-bold text-center py-2 tracking-wide hover:text-cyan-400 border-b border-slate-400"
              onClick={handleMenuButton}
            >
              Home
            </li>
          </Link>

          <Link to="/filters">
            <li
              className="bg-black text-white text-xl font-bold text-center py-2 tracking-wide hover:text-cyan-400 border-b border-slate-400"
              onClick={handleMenuButton}
            >
              Filters
            </li>
          </Link>

          <Link to="/about-us">
            <li
              className="bg-black text-white text-xl font-bold text-center py-2 tracking-wide hover:text-cyan-400 border-b border-slate-400"
              onClick={handleMenuButton}
            >
              About Us
            </li>
          </Link>

          <li
            className="bg-black text-white text-xl font-bold text-center py-2 tracking-wide hover:text-cyan-400 border-b border-slate-400"
            onClick={handleContactUs}
          >
            Contact Us
          </li>
        </ul>
      </div>

      {/* Contact Us Modal Section */}
      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
