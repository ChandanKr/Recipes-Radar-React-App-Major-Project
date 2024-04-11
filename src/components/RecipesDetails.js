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
          <div
            key={index}
            className="flex mb-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-800"
          >
            <span className="mr-2 text-white text-[1.1rem] drop-shadow-textSmall">
              🥣{" "}
            </span>
            <span className="text-white text-[1.1rem] drop-shadow-textSmall">
              {" "}
              {item}
            </span>
          </div>
        );
      })
    : "";

  const instructionsData = Array.isArray(instructions)
    ? instructions.map((item, index) => {
        return (
          <div
            key={index}
            className="flex mb-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-800"
          >
            <span className="mr-2 text-white text-[1.1rem] drop-shadow-textSmall">
              🥥{" "}
            </span>
            <span className="text-white text-[1.1rem] drop-shadow-textSmall">
              {" "}
              {item}
            </span>
          </div>
        );
      })
    : "";

  let recipeToShowLength = recipeToShow.length;
  // console.log(recipeToShowLength);

  return recipeToShowLength == 0 ? (
    <ShimmerRecipesDetails />
  ) : (
    // <div className="main-container">
    <div className="px-20 py-10 bg-gradient-to-r from-blue-900 to-blue-400 max-sm:px-8 max-md:px-8 max-sm:py-8 max-md:py-8">
      <div className="flex flex-row max-sm:flex-col max-md:flex-col">
        <div className="w-[35%] max-sm:w-full max-md:w-full">
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt="recipe-image"
              className="border-2 border-cyan-400 shadow-custom-black2 rounded-tl-[2rem] rounded-br-[2rem]"
            />
            <h1 className="w-full text-white border-2 border-cyan-400 mt-4 rounded-tl-2xl rounded-br-2xl text-center bg-black text-[1.4rem] px-0 py-2 shadow-custom-cyan">
              {name}
            </h1>
          </div>
        </div>
        <div className="w-[65%] max-sm:w-full grid grid-cols-3 gap-x-4 gap-y-12 pl-4 max-sm:grid-cols-1 max-md:grid-cols-1 max-sm:gap-y-3 max-md:gap-y-3 max-sm:pl-0 max-md:pl-0 max-sm:mt-4 max-md:mt-4">
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
          <DetailsCard name={"Ratings"} value={`${rating} / 5`} />
          <DetailsCard name={"Reviews"} value={reviewCount} />
        </div>
      </div>
      <div className="mt-12 flex flex-row max-sm:flex-col max-md:flex-col">
        <div className="w-[45%] max-sm:w-full max-md:w-full">
          <div className="bg-black p-4 rounded-tl-[2rem] rounded-tr-[2rem]">
            <p className="text-white text-[1.5rem] font-bold text-center uppercase">
              Ingredients to be used
            </p>
          </div>
          <div className="lists">{ingredientsData}</div>
        </div>
        <div className="w-[55%] ml-4 max-sm:w-full max-md:w-full max-sm:ml-0 max-md:ml-0">
          <div className="bg-black p-4 rounded-tl-[2rem] rounded-tr-[2rem]">
            <p className="text-white text-[1.5rem] font-bold text-center uppercase">
              How to prepare and cook
            </p>
          </div>
          <div className="">{instructionsData}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;

const DetailsCard = ({ name, value }) => {
  return (
    <>
      <div className="flex flex-col rounded-tl-[2rem] rounded-br-[2rem] shadow-custom-black2 max-sm:h-20 max-md:h-20 max-sm:rounded-tl-3xl max-md:rounded-tl-3xl max-sm:rounded-br-3xl max-md:rounded-br-3xl">
        <div className="h-1/2 text-cyan-400 bg-black text-[1.5rem] font-bold rounded-tl-[2rem] flex justify-center items-center max-sm:rounded-tl-3xl max-md:rounded-tl-3xl">
          {name}
        </div>
        <div className="h-1/2 text-gray-950 bg-gradient-to-r from-green-400 to-teal-500 text-[1.3rem] font-bold rounded-br-[2rem] flex justify-center items-center max-sm:rounded-br-3xl max-md:rounded-br-3xl">
          {value}
        </div>
      </div>
    </>
  );
};
