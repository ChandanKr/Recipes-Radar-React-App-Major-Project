const useRecipesData = async () => {
  const data = await fetch("https://dummyjson.com/recipes?limit=50");
  const json = await data.json();
  // console.log(json);
  return json;
};

export default useRecipesData;
