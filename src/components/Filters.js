import { useState, useEffect, useContext } from "react";
import useRecipesData from "../utils/useRecipesData";
import ShimmerCard from "./ShimmerCard";
import { filtersData } from "../constant/shared";
import { IoCloseCircle } from "react-icons/io5";
import RecipesCard from "./RecipesCard";
import SearchContext from "../utils/SearchContext";
import { useSelector } from "react-redux";

const Filters = () => {
  let [filterValue, setFilterValue] = useState("");
  let [allRecipes, setAllRecipes] = useState(null);
  let [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  let [filterApplied, setFilterApplied] = useState(false);

  //! useCOntext Hook Concept
  // const { searchVal, setSearchVal } = useContext(SearchContext);
  // console.log(searchVal);

  //! Redux Toolkit Concepts
  const searchQuery = useSelector((store) => store.search.query);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const recipeData = await useRecipesData();
    // console.log(recipeData.recipes);
    if (searchQuery == "") {
      setAllRecipes(recipeData.recipes);
      setFilteredRecipes(recipeData.recipes);
    } else {
      const filteredRecipesWithSearchQuery = recipeData.recipes.filter(
        (recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setAllRecipes(recipeData.recipes);
      setFilteredRecipes(filteredRecipesWithSearchQuery);
    }
  };

  const handleSelectedFilters = (e) => {
    setFilterValue(e.target.innerText);
    if (e.target.innerText == "Easy" || e.target.innerText == "Medium") {
      const newData = allRecipes.filter(
        (item) => item.difficulty === e.target.innerText
      );
      setFilteredRecipes(newData);
      setFilterApplied(false);
    } else {
      const newData = allRecipes.filter((item) =>
        item.mealType.includes(e.target.innerText)
      );
      setFilteredRecipes(newData);
      setFilterApplied(false);
    }
  };
  // console.log(filteredRecipes);

  const allFilters = filtersData.map((currElem, index) => {
    return (
      <p
        key={index}
        onClick={handleSelectedFilters}
        className="text-white text-lg px-0 py-2 border-b border-gray-400 cursor-pointer text-center transition-all font-bold drop-shadow-textSmall hover:bg-black  hover:text-cyan-400"
      >
        {currElem}
      </p>
    );
  });

  return (
    <div className="px-20 py-10 bg-gradient-to-r from-sky-500 to-indigo-500 max-sm:px-8 max-md:px-8 max-sm:py-8 max-md:py-8">
      {/* Filter Category Section */}
      {filterApplied && (
        <div
          className="w-full bg-white bg-opacity-50 backdrop-blur-sm fixed top-20 left-0 z-10 min-h-full"
          onClick={() => setFilterApplied(false)}
        >
          <div
            className={`${
              filterApplied ? `left-0` : `-left-96`
            } w-1/4 fixed top-0 z-10 min-h-full transition-all flex flex-col max-sm:w-2/3 max-md:w-2/3`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-600 bg-opacity-50 backdrop-blur-md shadow-custom-black border-r border-gray-400">
              <h2 className="text-white mb-4 mt-2 text-center text-2xl font-bold drop-shadow-textSmall">
                Categories:
              </h2>
              {allFilters}
            </div>
          </div>
        </div>
      )}

      {/* Filtered Result Page Section */}
      <div
        className={
          filteredRecipes == null
            ? "w-full min-h-screen bg-slate-300 flex flex-row p-4 rounded-3xl shadow-custom-black"
            : "min-h-screen bg-white bg-opacity-50 backdrop-blur-md rounded-3xl shadow-custom-black flex flex-row p-4"
        }
      >
        <div className="px-8 w-full">
          {/* <span className="m-2 p-2 border-8 border-red-500 font-bold text-3xl text-white">
            {searchVal.searchKeyword}
          </span> */}
          <div className="flex flex-row items-center justify-between mb-6 max-sm:flex-col max-md:flex-col">
            <div className="w-2/5 flex flex-row justify-between max-sm:flex-col max-md:flex-col max-sm:w-full max-md:w-full max-sm:items-center max-md:items-center">
              {filteredRecipes == null ? (
                <h2 className="text-white text-center text-3xl font-bold drop-shadow-textSmall  max-sm:w-screen max-md:w-screen">
                  Loading... Please wait...
                </h2>
              ) : (
                <h2 className="text-white text-3xl text-center font-bold drop-shadow-textSmall  max-sm:w-screen max-md:w-screen">
                  <span className="text-green-400 drop-shadow-text text-5xl">
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
                <FilterChips
                  filterValue={filterValue}
                  allRecipes={allRecipes}
                  setFilteredRecipes={setFilteredRecipes}
                  setFilterValue={setFilterValue}
                />
              ) : (
                ""
              )}
            </div>

            <div>
              {filteredRecipes != null && (
                <button
                  onClick={() => setFilterApplied(true)}
                  className="bg-cyan-950 text-white text-[1.25rem] font-bold px-4 pt-1 pb-2 mt-4 rounded-tl-xl rounded-br-xl cursor-pointer transition-all hover:text-cyan-400 hover:bg-black"
                >
                  Apply Filters
                </button>
              )}
            </div>
          </div>

          <div className="result-cards grid grid-cols-4 gap-8 max-sm:grid-cols-1 max-md:grid-cols-1 lg:grid-cols-5">
            {filteredRecipes == null ? (
              <>
                {Array.from({ length: 10 }, (_, index) => (
                  <ShimmerCard key={index} />
                ))}
              </>
            ) : (
              <>
                {filteredRecipes.map((recipe, index) => (
                  <RecipesCard key={index} recipe={recipe} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

const FilterChips = ({
  filterValue,
  allRecipes,
  setFilteredRecipes,
  setFilterValue,
}) => {
  const handleChipClose = () => {
    setFilteredRecipes(allRecipes);
    setFilterValue("");
  };

  return (
    <>
      <div className="flex flex-row items-center bg-green-400 h-8 px-4 mt-5 border border-black rounded-2xl max-sm:items-center max-md:items-center">
        <div className="text-white font-semibold drop-shadow-textSmall">
          {filterValue}
        </div>
        <div
          className="text-white drop-shadow-textSmall text-lg ml-2 cursor-pointer transition-all hover:text-red-600"
          title="click to clear filter"
          onClick={handleChipClose}
        >
          <IoCloseCircle />
        </div>
      </div>
    </>
  );
};
