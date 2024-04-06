import "./styles/filters.css";
import { Link } from "react-router-dom";

const RecipesCard = ({ recipe }) => {
  // console.log(recipe);

  const { image, difficulty, rating, servings, caloriesPerServing, name, id } =
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
              <Link to={`/recipes/${id}`} className="link">
                <button>Show Full Recipe</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
