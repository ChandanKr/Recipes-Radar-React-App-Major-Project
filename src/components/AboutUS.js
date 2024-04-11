import {
  aboutUsMsg1,
  aboutUsMsg2,
  aboutUsMsg3,
  aboutUsMsg4,
} from "../constant/shared";

const BGIMG = {
  backgroundImage: `repeating-linear-gradient(
    15deg,
    hsl(142, 0%, 8%) 0px,
    hsl(142, 0%, 8%) 12px,
    transparent 13px
  ),
  repeating-linear-gradient(
    155deg,
    hsl(142, 0%, 8%) 0px,
    hsl(142, 0%, 8%) 12px,
    transparent 13px
  ),
  linear-gradient(90deg, hsla(96, 0%, 71%, 1), hsla(111, 0%, 71%, 1))`,
};

const AboutUS = () => {
  return (
    <div className="about-us-container bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen px-20 py-0 max-sm:px-8 max-md:px-8">
      <div className="px-0 py-8">
        <p className="bg-white bg-opacity-80 backdrop-blur-xl text-xl text-center px-6 py-4 mb-4 rounded-tl-[2rem] rounded-br-[2rem] shadow-custom-black">
          {aboutUsMsg1}
        </p>
        <p className="bg-white bg-opacity-80 backdrop-blur-xl text-xl text-center px-6 py-4 mb-4 rounded-tl-[2rem] rounded-br-[2rem] shadow-custom-black">
          {aboutUsMsg2}
        </p>
        <p className="bg-white bg-opacity-80 backdrop-blur-xl text-xl text-center px-6 py-4 mb-4 rounded-tl-[2rem] rounded-br-[2rem] shadow-custom-black">
          {aboutUsMsg3}
        </p>
        <p className="bg-white bg-opacity-80 backdrop-blur-xl text-xl text-center px-6 py-4 mb-0 rounded-tl-[2rem] rounded-br-[2rem] shadow-custom-black">
          {aboutUsMsg4}
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
