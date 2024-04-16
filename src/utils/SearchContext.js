import { createContext } from "react";

const SearchContext = createContext({
  searchVal: {
    searchKeyword: "Hello",
  },
});

SearchContext.displayName = "SearchValueContext"; // for debugging purpose only, it will show like SearchValueContext.Provider

export default SearchContext;
