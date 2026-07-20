import { Link } from "react-router";
import type { Movie } from "../../types/movie";
import { getImageUrl } from "../../utils/image";

interface MoviesCardProps{
    movie: Movie;
}

export function MovieCard({movie}:MoviesCardProps){
    return(
        <Link 
            to={`/movie/${movie.id}`}
            // className="block cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            className="block cursor-pointer transform-gpu hover:scale-105 transition duration-300 hover:shadow-xl hover:shadow-sky-200"
        >
            <div className="rounded-lg overflow-hidden border border-slate-400 shadow-lg h-111">
                <img
                    src={getImageUrl(movie.poster_path)}
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
        </Link>
    );
}