import type { MovieDetails } from "../../types/movie-detail";
import { formatDate } from "../../utils/date";
import { getImageUrl } from "../../utils/image";
import { formatRating } from "../../utils/rate";
import { formatRuntime } from "../../utils/runtime";

interface MovieHeroProps {
    movie: MovieDetails;
}

export default function MovieHero({movie}: MovieHeroProps){

    const formattedDate = formatDate(movie.release_date);

    const rating = formatRating(movie.vote_average);

    const runtime = formatRuntime(movie.runtime);

    return(
        <section
            style={{
                backgroundImage: `url(${getImageUrl(movie.backdrop_path)})`
            }} 
            className="relative min-h-screen bg-cover bg-no-repeat overflow-hidden"
        >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/30" />
            
                {/* Content Wrapper */}
                <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-16 
                flex-col lg:flex-row lg:items-center">

                    {/* Poster */}
                    <div className="w-56 sm:w-64 lg:w-72 flex-shrink-0">
                        <img
                            src={getImageUrl(movie.poster_path)}
                            alt={movie.title}
                            className="w-full rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
                        />
                    </div>

                    {/* Movie Information */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                                {movie.title}
                            </h1>

                            {movie.tagline && ( 
                                <p className="text-lg italic text-slate-300">
                                    {movie.tagline}
                                </p>
                            )}
                        </div>

                        {/* MetaData */}
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-slate-200 lg:justify-start">
                            <span>
                                ⭐ {rating}
                            </span>

                            <span>
                                {formattedDate}
                            </span>

                            <span>
                                {runtime.hours}h
                                {" "}
                                {runtime.minutes > 0 && `${runtime.minutes}m`}
                            </span>
                        </div>

                        {/* Genres */}
                        <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                            {movie.genres.map((genre) => (
                                <span 
                                    key={genre.id}
                                    className="rounded-full border border-slate-400/30 bg-white/10 text-white px-4 py-2 
                                    text-sm font-medium backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        {/* Overview */}
                        <div className="mt-8 max-w-3xl">
                            <p className="text-lg leading-7 text-slate-300 line-clamp-4">
                                {movie.overview}
                            </p>
                        </div>

                        {/* Actions */}
                        {/* <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-full bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors duration-300">
                                Watch Trailer
                            </button>
                            <button className="rounded-full bg-slate-600 text-white px-6 py-3 font-bold hover:bg-slate-700 transition-colors duration-300">
                                Add to Watchlist
                            </button>
                        </div> */}

                        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button
                                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:scale-[1.02]"
                            >
                                ▶ Watch Trailer
                            </button>

                            <button
                                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                            >
                                ♡ Favorite
                            </button>
                        </div>
                    </div>
                </div>
        </section>
    )
}