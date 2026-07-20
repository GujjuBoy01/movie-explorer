export interface FormattedRuntime {
    hours: number;
    minutes: number;
}

export function formatRuntime(runtime: number | null | undefined): FormattedRuntime{

    if(!runtime){
        return {
            hours: 0,
            minutes: 0,
        }
    }

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return {
        hours,       //hours: hours,
        minutes,     //minutes: minutes,
    };
}