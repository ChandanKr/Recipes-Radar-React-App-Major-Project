import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/body.css";
import useRecipesData from "../utils/useRecipesData";

const Body = () => {
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   useRecipesData();
  // }, []);

  // const getRecipesData = async () => {
  //   const data = await fetch("https://dummyjson.com/recipes?limit=50");
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div className="body">
      <div className="overlay">
        <div className="contents">
          <div className="heading">
            <h1 className="first">Recipes</h1>
            <h1 className="second">Radar</h1>
          </div>
          <div>
            <h3 className="subtitle">Recipes Discovered, Tastes Savored</h3>
          </div>
          <div className="searchDiv">
            <input
              type="text"
              name=""
              id=""
              placeholder="Confused for recipe ? Search here . . . . ."
              className=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="search-btn">
              <Link to="/filters">Search</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
