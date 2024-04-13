import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRecipesData from "../utils/useRecipesData";
import BG_IMG from "../assets/images/home-background.jpg";
import SearchContext from "../utils/SearchContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  // const [inputValue, setInputValue] = useState("");

  // const { searchVal } = useContext(SearchValueContext);
  const { searchVal, setSearchVal } = useContext(SearchContext);
  console.log(searchVal);

  // useEffect(() => {
  //   useRecipesData();
  // }, []);

  // const getRecipesData = async () => {
  //   const data = await fetch("https://dummyjson.com/recipes?limit=50");
  //   const json = await data.json();
  //   console.log(json);
  // };

  const handleSearchButton = () => {
    toast.error("Type Something To Search !!", {
      theme: "colored",
      progressStyle: { backgroundColor: "yellow" },
    });
  };

  return (
    <div
      className="w-full min-h-[87vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${BG_IMG})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center h-full">
        <div className="flex flex-col items-center w-full px-20">
          <div className="flex items-center">
            <h1 className="text-white text-7xl font-bold ">
              Recipes <span className="text-cyan-400">Radar</span>
            </h1>
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold font-mono mt-2">
              Recipes Discovered, Tastes Savored
            </h3>
          </div>
          <div className="searchDiv w-3/5 mt-10 flex justify-center items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Confused for recipe ? Search here . . . . ."
              className="w-3/4 px-5 py-2 bg-white outline-none transition-all focus:bg-cyan-100 text-black text-lg rounded-tl-xl max-sm:w-screen max-md:w-screen"
              value={searchVal.searchKeyword}
              onChange={(e) =>
                setSearchVal({
                  searchKeyword: e.target.value,
                })
              }
            />
            <Link to={searchVal.searchKeyword.length == 0 ? "/" : "/filters"}>
              <button
                onClick={handleSearchButton}
                className={`search-btn w-full px-2.5 pt-1.5 pb-2.5 bg-black text-white border border-white text-[1.15rem] font-bold rounded-br-xl transition-all text-center ${
                  searchVal.searchKeyword.length == 0
                    ? `cursor-not-allowed`
                    : `cursor-pointer hover:text-cyan-400 hover:border-cyan-400 hover:shadow-custom-cyan`
                }`}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Body;
