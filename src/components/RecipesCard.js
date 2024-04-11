import { Link } from "react-router-dom";

const RecipesCard = ({ recipe }) => {
  // console.log(recipe);

  const { image, difficulty, rating, servings, caloriesPerServing, name, id } =
    recipe;
  return (
    <>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 border border-white rounded-tl-3xl rounded-br-3xl min-h-72 shadow-custom-black2">
        <div className="m-4">
          <div className="flex flex-row">
            <div className="w-3/5">
              <img
                src={image}
                alt="card-image"
                className="w-[89%] border border-white rounded-tl-3xl shadow-custom-cyan"
              />
            </div>
            <div className="text-center w-2/4">
              <p className="text-[0.8rem] text-white mb-0.5 pb-1 border-b border-gray-300 max-sm:mb-1 max-md:mb-1 max-sm:pb-1.5 max-md:pb-1.5">
                {difficulty}
              </p>
              <p className="text-[0.8rem] text-white mb-0.5 pb-1 border-b border-gray-300 max-sm:mb-1 max-md:mb-1 max-sm:pb-1.5 max-md:pb-1.5">
                Rating: {rating}
              </p>
              <p className="text-[0.8rem] text-white mb-0.5 pb-1 border-b border-gray-300 max-sm:mb-1 max-md:mb-1 max-sm:pb-1.5 max-md:pb-1.5">
                Serving: {servings}
              </p>
              <p className="text-[0.8rem] text-white mb-0.5 pb-1 border-b border-gray-300 max-sm:mb-1 max-md:mb-1 max-sm:pb-1.5 max-md:pb-1.5">
                KCAL: {caloriesPerServing}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <p className="text-white text-[1.2rem] text-center font-bold mt-4 drop-shadow-textSmall">
                {name}
              </p>
            </div>
            <div className="mt-4 px-4 py-2 bg-transparent text-white drop-shadow-textSmall text-[0.8rem] font-bold border border-white rounded-tl-xl rounded-br-xl cursor-pointer transition-all hover:bg-black hover:text-cyan-400 hover:border-black hover:shadow-custom-cyan max-sm:bg-black max-md:bg-black max-sm:text-cyan-400 max-md:text-cyan-400">
              <Link to={`/recipes/${id}`} className="link">
                Show Full Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
