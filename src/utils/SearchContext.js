import { createContext } from "react";

const SearchContext = createContext({
  searchVal: {
    searchKeyword: "Hello",
  },
});

// SearchValueContext.displayName = "SearchValueContext"; // for debugging purpose only, it will show like SearchValueContext.Provider

export default SearchContext;
