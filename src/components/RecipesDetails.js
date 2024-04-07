import "./styles/recipesDetails.css";
import useRecipesData from "../utils/useRecipesData";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShimmerRecipesDetails from "./ShimmerRecipesDetails";

const RecipesDetails = () => {
  const [allRecipe, setAllRecipe] = useState([]);
  const [recipeToShow, setRecipeToShow] = useState([]);

  const getURL = useLocation();
  const urlArray = getURL.pathname.split("/");
  const getIDFromURL = urlArray[urlArray.length - 1];

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  useEffect(() => {
    const filteredRecipe = allRecipe.filter(
      (item) => item.id === parseInt(getIDFromURL)
    );
    setRecipeToShow(filteredRecipe);
  }, [allRecipe, getIDFromURL]);

  const fetchDataFromAPI = async () => {
    const data = await useRecipesData();
    setAllRecipe(data.recipes);
  };

  const {
    name,
    image,
    mealType,
    difficulty,
    cuisine,
    prepTimeMinutes,
    cookTimeMinutes,
    caloriesPerServing,
    servings,
    rating,
    reviewCount,
    ingredients,
    instructions,
  } = recipeToShow[0] || [];

  const ingredientsData = Array.isArray(ingredients)
    ? ingredients.map((item, index) => {
        return (
          <div key={index}>
            <span className="emoji">🥣 </span>
            <span> {item}</span>
          </div>
        );
      })
    : "";

  const instructionsData = Array.isArray(instructions)
    ? instructions.map((item, index) => {
        return (
          <div key={index}>
            <span className="emoji">🥥 </span>
            <span> {item}</span>
          </div>
        );
      })
    : "";

  let recipeToShowLength = recipeToShow.length;
  // console.log(recipeToShowLength);

  return recipeToShowLength == 0 ? (
    <ShimmerRecipesDetails />
  ) : (
    <div className="main-container">
      <div className="top-container">
        <div className="image-and-details-section">
          <div className="image-and-title">
            <img src={image} alt="recipe-image" />
            <h1>{name}</h1>
          </div>
        </div>
        <div className="all-details">
          <DetailsCard
            name={"Meal Type"}
            value={Array.isArray(mealType) ? mealType.join(", ") : mealType}
          />
          <DetailsCard name={"Difficulty"} value={difficulty} />
          <DetailsCard name={"Cuisine"} value={cuisine} />
          <DetailsCard
            name={"Preparation Time"}
            value={`${prepTimeMinutes} Minutes`}
          />
          <DetailsCard
            name={"Cooking Time"}
            value={`${cookTimeMinutes} Minutes`}
          />
          <DetailsCard name={"Calories"} value={`${caloriesPerServing} KCAL`} />
          <DetailsCard name={"Servings"} value={`${servings} People`} />
          <DetailsCard name={"Ratings"} value={`${rating} / 5.0`} />
          <DetailsCard name={"Reviews"} value={reviewCount} />
        </div>
      </div>
      <div className="ingredients-and-instructions-section">
        <div className="ingredients-section">
          <div className="title">
            <p>Ingredients to be used</p>
          </div>
          <div className="lists">{ingredientsData}</div>
        </div>
        <div className="instructions-section">
          <div className="title">
            <p>How to prepare and cook</p>
          </div>
          <div className="lists">{instructionsData}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;

const DetailsCard = ({ name, value }) => {
  return (
    <>
      <div className="details-block">
        <div className="detail-name">{name}</div>
        <div className="detail-value">{value}</div>
      </div>
    </>
  );
};
