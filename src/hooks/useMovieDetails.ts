import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../services/movie.service";

export const useMovieDetails = (movieId: number) => {
    return useQuery({
        queryKey: ["movie-details",movieId],
        queryFn: () => getMovieDetails(movieId),
        enabled: movieId > 0,
    });
};

