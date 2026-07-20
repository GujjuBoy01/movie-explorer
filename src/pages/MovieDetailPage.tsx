import { useParams } from "react-router";
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieHero from "../components/movieDetails/MovieHero";

export default function MovieDetailPage(){

    const {id} = useParams();

    const movieId = Number(id);

    const movieDetailQuery = useMovieDetails(movieId);

    console.log("movie detail",movieDetailQuery.data)

    if(movieDetailQuery.error){
        return <p>We couldn't load this movie.</p>;
    }

    if(movieDetailQuery.isLoading){
        return <p>Wait!!...Movie Details Loading</p>;
    }

    const movie = movieDetailQuery?.data;

    return (
        <div>
            {/* <h1>Movie Detail Page</h1> */}
            <MovieHero movie={movie} />

            <h2>{movieDetailQuery.data?.title}</h2>
        </div>
    );
}


    // const runtime = 169;
    // const hour = Math.floor(runtime/60);

    // const remaintime = runtime - (hour * 60);

    // console.log("runtikme",`${hour}h ${remaintime}m`)