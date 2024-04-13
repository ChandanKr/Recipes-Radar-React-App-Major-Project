import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
// import AboutUS from "./components/AboutUS";
import RecipesDetails from "./components/RecipesDetails";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import useOnline from "./utils/useOnline";
import OfflinePage from "./components/OfflinePage";
import SearchContext from "./utils/SearchContext";

// For lazy loading
import { lazy, Suspense, useState } from "react";
const AboutUS = lazy(() => import("./components/AboutUS"));
// On Demand loading , react suspends loading upon render
// To prevent this, we will use { Suspense } from "react"

const AppLayout = () => {
  const [searchVal, setSearchVal] = useState({
    searchKeyword: "",
  });

  const online = useOnline();
  return !online ? (
    <OfflinePage />
  ) : (
    <SearchContext.Provider
      value={{
        searchVal: searchVal,
        setSearchVal: setSearchVal,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </SearchContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/filters",
        element: <Filters />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense>
            <AboutUS />
          </Suspense>
        ), // Suspense for lazy loading
      },
      {
        path: "/recipes/:id",
        element: <RecipesDetails />, // Dynamic routing
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
