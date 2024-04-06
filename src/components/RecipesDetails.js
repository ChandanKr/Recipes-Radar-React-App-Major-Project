import "./styles/recipesDetails.css";
import useRecipesData from "../utils/useRecipesData";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

  const { name, image } = recipeToShow[0] || [];

  return (
    <div className="main-container">
      <div className="image-and-details-section">
        {recipeToShow.length > 0 && (
          <>
            <img src={image} alt="" />
            <h1>{name}</h1>
          </>
        )}
      </div>
      <div className="ingredients-and-instructions-section">Hello</div>
    </div>
  );
};

export default RecipesDetails;
