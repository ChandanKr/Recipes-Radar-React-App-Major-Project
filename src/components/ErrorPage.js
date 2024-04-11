import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center">
        <h1 className="text-[#ff4500] drop-shadow-textSmall font-mono text-[2.5rem] m-8 text-center">
          Ooops!! You entered a wrong path...
        </h1>
        <Link to={"/"}>
          <button className="px-4 py-2 text-[1.2rem] font-bold bg-[greenyellow] text-red-600 border-2 border-white shadow-custom-black2 outline-none cursor-pointer transition-all rounded-tl-2xl rounded-br-2xl hover:bg-[#00d1cd] hover:text-white hover:border-white">
            Go Back To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
