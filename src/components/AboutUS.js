import "./styles/aboutUs.css";
import { aboutUsMsg1,aboutUsMsg2,aboutUsMsg3,aboutUsMsg4 } from "../constant/shared";

const AboutUS = () => {
  return (
    <div className="about-us-container">
      <div className="messages-section">
        <p>{aboutUsMsg1}</p>
        <p>{aboutUsMsg2}</p>
        <p>{aboutUsMsg3}</p>
        <p>{aboutUsMsg4}</p>
      </div>
    </div>
  );
};

export default AboutUS;
