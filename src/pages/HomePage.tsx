import { useState } from "react";
import { MovieCardSkeleton } from "../components/movie/MovieCardSkeleton";
import { MovieGrid } from "../components/movie/MovieGrid";
import { useTrendingMovies } from "../hooks/useTrendingMovies"
import SearchBar from "../components/movie/SearchBar";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useDebounce } from "../hooks/useDebounce";
import EmptyState from "../components/common/EmptyState";

export default function HomePage(){

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    const trendingQuery = useTrendingMovies();
    const searchQuery = useSearchMovies(debouncedSearch);

    const isSearching = search.trim() !== "" ;
    const isDebouncing = isSearching && search !== debouncedSearch;

    const showSearchSkeleton =
        isSearching &&
        (isDebouncing || searchQuery.isLoading);

    const activeQuery = 
        debouncedSearch.trim() === ""
            ? trendingQuery
            : searchQuery;

    const movies = activeQuery.data?.results ?? [];

    const isLoading =
        search.trim() === ""
            ? trendingQuery?.isLoading
            : searchQuery?.isLoading;

    const error = activeQuery.error;

    // if(isLoading){
    //     return (
    //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    //             {Array.from({ length: 20}).map((_, index) => (
    //                 <MovieCardSkeleton key={index}/>
    //             ))}
    //         </div>
    //     )
    // }

    // if(error){
    //     return <h1>Something went wrong!!</h1>;
    // }

    // console.log(trendingQuery?.data)

    console.log("search query:",searchQuery);

    const renderSearchContent = () => {
        if(showSearchSkeleton){
           return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Array.from({ length: 20}).map((_, index) => (
                        <MovieCardSkeleton key={index}/>
                    ))}
                </div> 
           ) 
        }

        if(searchQuery.error){
            return <h1>Something went wrong!!</h1>;
        }
        
        if(movies.length === 0){
            return (
                <EmptyState 
                    title="No Movies Found"
                    description="Try searching with another movie title."
                />
            )
        }

        return <MovieGrid movies={movies}/>;

    };

    const renderTrendingContent = () => {
        if(trendingQuery.isLoading){
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Array.from({ length: 20}).map((_, index) => (
                        <MovieCardSkeleton key={index}/>
                    ))}
                </div> 
           ) 
        }

        if(trendingQuery.error){
            return <h1>Something went wrong!!</h1>;
        }

        return <MovieGrid movies={movies}/>;
    }   

    return(
        <div>
            <SearchBar onChange={setSearch} value={search} />
            <p>Searching for: {search}</p>

            {isSearching
                ? renderSearchContent()
                : renderTrendingContent()
            }

            {/* {error ? (
                <h1>Something went wrong!!</h1>
            ) : isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {Array.from({ length: 20}).map((_, index) => (
                        <MovieCardSkeleton key={index}/>
                    ))}
                </div>
            ) : (
                movies.length === 0 ? (
                    <EmptyState
                        title="No Movies Found"
                        description="Try searching with another movie title."
                    />
                ) : (
                    <MovieGrid movies={movies} />
                )
            )} */}
        </div>
    )
}



// import { useState } from "react";
// import { MovieCardSkeleton } from "../components/movie/MovieCardSkeleton";
// import { MovieGrid } from "../components/movie/MovieGrid";
// import { useTrendingMovies } from "../hooks/useTrendingMovies"
// import SearchBar from "../components/movie/SearchBar";
// import { useSearchMovies } from "../hooks/useSearchMovies";
// import { useDebounce } from "../hooks/useDebounce";
// import EmptyState from "../components/common/EmptyState";

// export default function HomePage(){

//     const [search, setSearch] = useState("");
//     const debouncedSearch = useDebounce(search, 500);
   
//     const trendingQuery = useTrendingMovies();
//     const searchQuery = useSearchMovies(debouncedSearch);

//     const movies =
//         search.trim() === ""
//             ? (trendingQuery?.data?.results ?? [])
//             : (searchQuery?.data?.results ?? []);

//     const isLoading =
//         search.trim() === ""
//             ? trendingQuery?.isLoading
//             : searchQuery?.isLoading;

//     const error =
//         search.trim() === ""
//             ? trendingQuery?.error
//             : searchQuery?.error;

//     // if(isLoading){
//     //     return (
//     //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//     //             {Array.from({ length: 20}).map((_, index) => (
//     //                 <MovieCardSkeleton key={index}/>
//     //             ))}
//     //         </div>
//     //     )
//     // }

//     // if(error){
//     //     return <h1>Something went wrong!!</h1>;
//     // }

//     // console.log(trendingQuery?.data)
//     console.log("search query:",searchQuery)

//     return(
//         <div>
//             <SearchBar onChange={setSearch} value={search} />
//             <p>Searching for: {search}</p>
//             {error ? (
//                 <h1>Something went wrong!!</h1>
//             ) : isLoading ? (
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                     {Array.from({ length: 20}).map((_, index) => (
//                         <MovieCardSkeleton key={index}/>
//                     ))}
//                 </div>
//             ) : (
//                 movies.length === 0 ? (
//                     <EmptyState
//                         title="No Movies Found"
//                         description="Try searching with another movie title."
//                     />
//                 ) : (
//                     <MovieGrid movies={movies} />
//                 )
//             )}
//         </div>
//     )
// }