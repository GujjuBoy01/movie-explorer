import type { Movie } from "../../types/movie";
import { MovieCard } from "./MoviesCard";

interface MovieGridProps {
    movies: Movie[];
}

export function MovieGrid({movies}:MovieGridProps){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
}