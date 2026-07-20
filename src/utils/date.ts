
export function formatDate(date: string | null | undefined): string {
    if(!date){
        return "";
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(new Date(date));
}