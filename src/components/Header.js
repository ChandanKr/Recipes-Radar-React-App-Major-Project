import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./styles/header.css";
import { useState } from "react";
import ContactUsModal from "./ContactUsModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div>
          <ul className="navItems">
            <Link to="/">
              <li className="">Home</li>
            </Link>

            <Link to="/filters">
              <li className="">Filters</li>
            </Link>

            <Link to="/about-us">
              <li className="">About Us</li>
            </Link>

            <li onClick={() => setShowModal(true)}>Contact Us</li>
          </ul>
        </div>
      </div>

      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
