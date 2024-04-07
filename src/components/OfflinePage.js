import { Link } from "react-router-dom";
import "./styles/errorPage.css";

const OfflinePage = () => {
  return (
    <>
      <div className="error-overlay">
        <h1>🔴 Ooops!! You seems to be offline 🔴</h1>
        <h2>Please check your internet connection.</h2>
        <h2>This page will be restored automatically once your internet will be back.</h2>
      </div>
    </>
  );
};

export default OfflinePage;
