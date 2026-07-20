export interface Genre {
    id: string;
    name: string;
}
export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    tagline: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    runtime: number;
    vote_average: number;
    genres: Genre[];
}