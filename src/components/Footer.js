import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactUsModal from "./ContactUsModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="border-t border-gray-400 border-opacity-45 bg-black w-full px-20 py-0 max-sm:px-8 max-md:px-8">
        <div className="flex flex-row mt-8 max-sm:flex-col max-md:flex-col">
          {/* Logo Section */}
          <div className="w-1/3 flex items-center  max-sm:w-full max-md:w-full">
            <img src={Logo} alt="logo" className="w-80" />
          </div>

          {/* Navigation and Social Media Section */}
          <div className="w-2/3 flex items-center pl-32 max-sm:w-full max-md:w-full max-sm:pl-0 max-md:pl-0 max-sm:mt-8 max-md:mt-8 max-sm:justify-between max-md:justify-between">
            {/* Navigation Section */}
            <div className="w-1/2 max-sm:w-9/20 max-md:w-9/20">
              <p className="text-white text-3xl font-bold max-sm:text-xl max-md:text-xl">
                Our <span className="text-cyan-400">Services:</span>
              </p>
              <ul>
                <Link to="/">
                  <li className="mt-2 text-white text-lg font-bold">
                    ✨
                    <span className="hover:text-cyan-400 ml-2 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan">
                      Home
                    </span>
                  </li>
                </Link>

                <Link to="/filters">
                  <li className="mt-2 text-white text-lg font-bold">
                    ✨
                    <span className="hover:text-cyan-400 ml-2 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan">
                      Filters
                    </span>
                  </li>
                </Link>

                <Link to="/about-us">
                  <li className="mt-2 text-white text-lg font-bold">
                    ✨
                    <span className="hover:text-cyan-400 ml-2 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan">
                      About Us
                    </span>
                  </li>
                </Link>

                <li className="mt-2 text-white text-lg font-bold">
                  ✨
                  <span
                    className="hover:text-cyan-400 ml-2 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    Contact Us
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="w-1/2 pl-32 max-sm:pl-0 max-md:pl-0 max-sm:w-9/20 max-md:w-9/20">
              <p className="text-white text-3xl font-bold max-sm:text-xl max-md:text-xl">
                Follow <span className="text-cyan-400">Us On:</span>
              </p>
              <ul>
                <li className="mt-2 text-white text-lg font-bold flex items-center">
                  <FaFacebookSquare className="text-[#4267B2] text-2xl" />
                  <span className="hover:text-cyan-400 ml-3 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan cursor-pointer">
                    Facebook
                  </span>
                </li>
                <li className="mt-2 text-white text-lg font-bold flex items-center">
                  <FaXTwitter className="text-[#AAB8C2] text-2xl" />
                  <span className="hover:text-cyan-400 ml-3 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan cursor-pointer">
                    X (Twitter)
                  </span>
                </li>
                <li className="mt-2 text-white text-lg font-bold flex items-center">
                  <FaInstagram className="text-[#E1306C] text-2xl" />
                  <span className="hover:text-cyan-400 ml-3 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan cursor-pointer">
                    Instagram
                  </span>
                </li>
                <li className="mt-2 text-white text-lg font-bold flex items-center">
                  <FaLinkedin className="text-[#0077b5] text-2xl" />
                  <span className="hover:text-cyan-400 ml-3 transition-all duration-200 hover:ml-6 hover:drop-shadow-custom-cyan cursor-pointer">
                    LinkedIn
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 mx-0">
          <p className="text-sm text-center text-white font-mono pb-4 max-sm:text-xs max-md:text-xs">
            Copyright © 2024 Recipes Radar - All rights reserved || Designed By:{" "}
            <a
              href="https://www.linkedin.com/in/chandan2606/"
              target="_chandan"
              className="text-cyan-400 cursor-pointer underline"
            >
              Chandan Kumar
            </a>
          </p>
        </div>
      </div>

      {/* Contact Us Modal Section */}
      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Footer;
