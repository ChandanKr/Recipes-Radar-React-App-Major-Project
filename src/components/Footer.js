import { useState } from "react";
import "./styles/footer.css";
import Logo from "../assets/images/logo.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactUsModal from "./ContactUsModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="footer">
        <div className="footer-contents">
          <div className="company-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="services">
            <p>
              Our <span>Services:</span>
            </p>
            <ul>
              <Link to="/">
                <li>
                  ✨ <span>Home</span>
                </li>
              </Link>

              <Link to="/filters">
                <li>
                  ✨ <span>Filters</span>
                </li>
              </Link>

              <Link to="/about-us">
                <li>
                  ✨ <span>About Us</span>
                </li>
              </Link>

              <li>
                ✨ <span onClick={() => setShowModal(true)}>Contact Us</span>
              </li>
            </ul>
          </div>
          <div className="follow-us">
            <p>
              Follow <span>Us On:</span>
            </p>
            <ul>
              <li>
                <FaFacebookSquare />
                <span>Facebook</span>
              </li>
              <li>
                <FaXTwitter />
                <span>X (Twitter)</span>
              </li>
              <li>
                <FaInstagram />
                <span>Instagram</span>
              </li>
              <li>
                <FaLinkedin />
                <span>LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2024 Recipes Radar - All rights reserved || Designed By:{" "}
            <a
              href="https://www.linkedin.com/in/chandan2606/"
              target="_chandan"
            >
              Chandan Kumar
            </a>
          </p>
        </div>
      </div>

      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Footer;
