
export function MovieCardSkeleton(){
    return(
        <div className="animate-pulse rounded-xl overflow-hidden bg-gray-500 border border-zinc-800">
            {/* Poster */}
            <div
                className="h-80 bg-zinc-500"
            />
            
            {/* Content */}
            <div className="p-4 space-y-3">
                {/* Title */}
                <h2 className="h-5 w-3/4 bg-zinc-700 rounded" />

                {/* Rating */}
                <p className="h-4 w-1/4 bg-zinc-700 rounded" />

                {/* Date */}
                <p className="h-4 w-1/2 bg-zinc-700 rounded"/>
            </div>
        </div>
    )
}