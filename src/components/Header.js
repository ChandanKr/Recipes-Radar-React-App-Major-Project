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
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <ul className="navItems">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/filters">Filters</Link>
            </li>
            <li className="">
              <Link to="/about-us">About Us</Link>
            </li>
            <li onClick={() => setShowModal(true)}>Contact Us</li>
          </ul>
        </div>
      </div>

      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;
