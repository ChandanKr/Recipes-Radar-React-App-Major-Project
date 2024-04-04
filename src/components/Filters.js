import "./styles/filters.css";

const Filters = () => {
  return (
    <>
      <div className="filters-page">
        <div className="category-section">
          <div className="categories">
            <h2>Categories:</h2>
            <p>Easy to Cook</p>
            <p>Medium Difficulties</p>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Snack</p>
            <p>Dinner</p>
            <p>Dessert</p>
            <p>Side Dish</p>
            <p>Appetizer</p>
            <p>Beverage</p>
          </div>
        </div>
        <div className="result-section">
          <div className="results">
            <h2>Search results:</h2>
          </div>

          <div className="result-cards">
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
            <RecipesCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;

const RecipesCard = () => {
  return (
    <>
      <div className="recipe-card">
        <div className="card-content">
          <img
            src="https://cdn.dummyjson.com/recipe-images/1.webp"
            alt="card-image"
          />
        </div>
      </div>
    </>
  );
};
