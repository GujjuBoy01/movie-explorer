import { api } from "../lib/axios";

export async function getTrendingMovies(
    period: "day" | "week" = "week"
) {
    const response = await api.get(`/trending/movie/${period}`);

    return response.data;
}