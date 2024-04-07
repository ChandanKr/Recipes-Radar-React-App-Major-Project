import { Link } from "react-router-dom";
import "./styles/errorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="error-overlay">
        <h1>Ooops!! You entered a wrong path...</h1>
        <Link to={"/"}><button>Go Back To Home</button></Link>
      </div>
    </>
  );
};

export default ErrorPage;
