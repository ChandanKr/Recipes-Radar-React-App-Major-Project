import { useState, useEffect } from "react";
import "./styles/filters.css";
import useRecipesData from "../utils/useRecipesData";
import ShimmerCard from "./ShimmerCard";

const Filters = () => {
  let [filterValue, setFilterValue] = useState();
  let [allRecipes, setAllRecipes] = useState(null);

  let filtersData = [
    "Easy",
    "Medium",
    "Breakfast",
    "Lunch",
    "Snack",
    "Snacks",
    "Dinner",
    "Dessert",
    "Side Dish",
    "Appetizer",
    "Beverage",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const recipeData = await useRecipesData();
      setAllRecipes(recipeData.recipes);
    };

    fetchData();
  }, []);

  const allFilters = filtersData.map((currElem, index) => {
    return (
      <p key={index} onClick={(e) => setFilterValue(e.target.innerText)}>
        {currElem}
      </p>
    );
  });

  return (
    <>
      <div
        className={allRecipes == null ? "shimmer-filters-page" : "filters-page"}
      >
        <div className="category-section">
          <div className="categories">
            <h2>Categories:</h2>
            {allFilters}
          </div>
        </div>
        <div className="result-section">
          <div className="results">
            <h2>
              Search results: {allRecipes == null ? "0" : allRecipes.length}
            </h2>
          </div>

          <div className="result-cards">
            {allRecipes == null ? (
              <>
                {Array.from({ length: 12 }, (_, index) => (
                  <ShimmerCard key={index} />
                ))}
              </>
            ) : (
              <>
                <div className="result-cards">
                  {allRecipes.map((recipe, index) => (
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

const RecipesCard = ({ recipe }) => {
  console.log(recipe);

  const { image, difficulty, rating, servings, caloriesPerServing, name } =
    recipe;
  return (
    <>
      <div className="recipe-card">
        <div className="card-content">
          <div className="card-first-section">
            <div className="image-div">
              <img src={image} alt="card-image" className="card-image" />
            </div>
            <div className="small-details">
              <p>{difficulty}</p>
              <p>Rating: {rating}</p>
              <p>Serving: {servings}</p>
              <p>KCAL: {caloriesPerServing}</p>
            </div>
          </div>
          <div className="card-second-section">
            <div className="recipe-name">
              <p>{name}</p>
            </div>
            <div className="recipe-btn">
              <button>Show Full Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
