import type { Movie } from "../../types/movie";
import { getPosterUrl } from "../../utils/image";

interface MoviesCardProps{
    movie: Movie;
}

export function MovieCard({movie}:MoviesCardProps){
    return(
        <div className="rounded-lg overflow-hidden border shadow-sm">
            <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                className="w-full h-80 object-cover"
            />

            <div className="p-4">
                <h2 className="font-semibold">
                    {movie.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {movie.release_date}
                </p>        

                <p className="mt-2">
                    ⭐ {movie.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    );
}