import { api } from "../lib/axios";
import type { TrendingMoviesResponse } from "../types/movie";

export async function getTrendingMovies(
    period: "day" | "week" = "week"
): Promise<TrendingMoviesResponse> {
    const response = await api.get<TrendingMoviesResponse>(`/trending/movie/${period}`);

    return response.data;
}