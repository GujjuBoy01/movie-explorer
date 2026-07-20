import { api } from "../lib/axios";
import type { TrendingMoviesResponse } from "../types/movie";
import type { MovieDetails } from "../types/movie-detail";

export async function getTrendingMovies(
    period: "day" | "week" = "week"
): Promise<TrendingMoviesResponse> {

    await new Promise(resolve => 
        setTimeout(resolve,2000)
    );

    const response = await api.get<TrendingMoviesResponse>(`/trending/movie/${period}`);

    return response.data;
}


export async function getSearchMovies(search: string) {
    
    const response = await api.get("/search/movie", {
        params: {
            query: search,
        }
    });
    
    return response.data;
}

export async function getMovieDetails(
    movieId: number
):Promise<MovieDetails>{
    const response = await api.get<MovieDetails>(`/movie/${movieId}`);

    return response.data;
}