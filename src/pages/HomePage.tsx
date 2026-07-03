import { useTrendingMovies } from "../hooks/useTrendingMovies"

export default function HomePage(){

    const {data, isLoading, error} = useTrendingMovies();

    if(isLoading){
        return <h1>Loading...</h1>;
    }

    if(error){
        return <h1>Something went wrong!!</h1>;
    }

    console.log(data)

    return <h1>Home Page</h1>
}