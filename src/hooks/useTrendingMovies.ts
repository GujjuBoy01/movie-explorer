import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../services/movie.service"

export const useTrendingMovies = () => {
    return useQuery({
        queryKey: ["trending-movies","week"],
        queryFn: () => getTrendingMovies("week"),
    });
};