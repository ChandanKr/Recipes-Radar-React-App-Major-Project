import { DiVim } from "react-icons/di";
import "./styles/shimmerRecipesDetails.css";

const ShimmerRecipesDetails = () => {
  return (
    <>
      {/* <div className="shimmer-recipe-card shimmer-effect"></div> */}

      <div className="shimmer-main-container">
        <div className="shimmer-top-container">
          <div className="shimmer-image-and-details-section">
            <div className="shimmer-image-and-title">
              <div className="shimmer-image shimmer-effect" />
              <div className="shimmer-h1 shimmer-effect"></div>
            </div>
          </div>
          <div className="shimmer-all-details">
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerRecipesDetails;

const DetailsCard = () => {
  return (
    <>
      <div className="shimmer-details-block shimmer-effect">
      </div>
    </>
  );
};
