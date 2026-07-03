import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/Searchpage";
import FavoritesPage from "../pages/FavoritesPage";
import MovieDetailPage from "../pages/MovieDetailPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "favorites",
                element: <FavoritesPage />,
            },
            {
                path: "movie/:id",
                element: <MovieDetailPage />,
            },
            {

            },
        ],
    },
]);