import { DiVim } from "react-icons/di";
import "./styles/shimmerEffect.css";

const ShimmerRecipesDetails = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-300 min-h-screen px-20 py-8 max-sm:px-10 max-md:px-10">
        <div className="flex flex-row max-sm:flex-col max-md:flex-col">
          <div className="w-[35%] max-sm:w-full max-md:w-full">
            <div className="flex flex-col items-center">
              <div className="shimmer-effect w-full  min-h-[27rem] bg-gradient-to-r from-gray-600 to-gray-400 border border-gray-300 shadow-custom-black2 rounded-tl-[2rem] rounded-br-[2rem]" />
              <div className="shimmer-effect border border-gray-300 w-full mt-4 rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-gray-600 to-gray-400 shadow-custom-black2 min-h-12"></div>
            </div>
          </div>
          <div className="w-[65%] grid grid-cols-3 gap-x-4 gap-y-12 pl-4 max-sm:w-full max-md:w-full max-sm:grid-cols-1 max-md:grid-cols-1 max-sm:gap-y-4 max-md:gap-y-4 max-sm:pl-0 max-md:pl-0 max-sm:mt-4 max-md:mt-4">
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
      <div className="shimmer-effect flex bg-gradient-to-r from-gray-600 to-gray-400 border border-gray-300 shadow-custom-black2 rounded-tl-[2rem] rounded-br-[2rem] max-sm:w-full max-md:w-full max-sm:h-24 max-md:h-24"></div>
    </>
  );
};
