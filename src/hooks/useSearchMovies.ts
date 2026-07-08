import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../services/movie.service";

export const useSearchMovies = (search: string) => {
    return useQuery({
        queryKey: ["search-movies",search],
        queryFn: () => getSearchMovies(search),
        enabled: search.trim() !== "",
    });
}