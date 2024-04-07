import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import AboutUS from "./components/AboutUS";
import RecipesDetails from "./components/RecipesDetails";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import useOnline from "./utils/useOnline";
import OfflinePage from "./components/OfflinePage";

const AppLayout = () => {
  const online = useOnline();
  return !online ? (
    <OfflinePage />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
        element: <AboutUS />,
      },
      {
        path: "/recipes/:id",
        element: <RecipesDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
