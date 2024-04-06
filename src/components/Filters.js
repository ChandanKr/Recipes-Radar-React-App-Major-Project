import { useState, useEffect } from "react";
import "./styles/filters.css";
import useRecipesData from "../utils/useRecipesData";
import ShimmerCard from "./ShimmerCard";
import { filtersData } from "../constant/shared";
import { IoCloseCircle } from "react-icons/io5";
import RecipesCard from "./RecipesCard";

const Filters = () => {
  let [filterValue, setFilterValue] = useState("");
  let [allRecipes, setAllRecipes] = useState(null);
  let [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const recipeData = await useRecipesData();
    setAllRecipes(recipeData.recipes);
    setFilteredRecipes(recipeData.recipes);
  };

  const handleSelectedFilters = (e) => {
    setFilterValue(e.target.innerText);
    if (e.target.innerText == "Easy" || e.target.innerText == "Medium") {
      const newData = allRecipes.filter(
        (item) => item.difficulty === e.target.innerText
      );
      setFilteredRecipes(newData);
    } else {
      const newData = allRecipes.filter((item) =>
        item.mealType.includes(e.target.innerText)
      );
      setFilteredRecipes(newData);
    }
  };
  // console.log(filteredRecipes);

  const allFilters = filtersData.map((currElem, index) => {
    return (
      <p key={index} onClick={handleSelectedFilters}>
        {currElem}
      </p>
    );
  });

  const handleChipClose = () => {
    setFilteredRecipes(allRecipes);
    setFilterValue("");
  };

  return (
    <>
      <div
        className={
          filteredRecipes == null ? "shimmer-filters-page" : "filters-page"
        }
      >
        <div className="category-section">
          <div className="categories">
            <h2>Categories:</h2>
            {allFilters}
          </div>
        </div>
        <div className="result-section">
          <div className="results">
            {filteredRecipes == null ? (
              <h2>Loading... Please wait...</h2>
            ) : (
              <h2>
                <span style={{ color: "lightgreen", fontSize: "2.5rem" }}>
                  {filteredRecipes.length}
                </span>
                {filteredRecipes.length > 1 ? (
                  <> Results Found</>
                ) : (
                  <> Result Found</>
                )}
              </h2>
            )}

            {filterValue !== "" ? (
              <>
                <div className="filter-chips">
                  <div className="filter-name">{filterValue}</div>{" "}
                  <div className="clear-btn" onClick={handleChipClose}>
                    <IoCloseCircle />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="result-cards">
            {filteredRecipes == null ? (
              <>
                {Array.from({ length: 12 }, (_, index) => (
                  <ShimmerCard key={index} />
                ))}
              </>
            ) : (
              <>
                <div className="result-cards">
                  {filteredRecipes.map((recipe, index) => (
                    <RecipesCard key={index} recipe={recipe} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
