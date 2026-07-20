import { MovieCardSkeleton } from "./MovieCardSkeleton";

export function SearchSkeleton(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 20}).map((_, index) => (
                <MovieCardSkeleton key={index}/>
            ))}
        </div> 
    )
}