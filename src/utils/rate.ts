
export function formatRating(rating: number | null | undefined): number{

    if(!rating){
        return 0;
    }

    return Number(rating.toFixed(1));
}