import { IMG_BASE_URL } from "../lib/config"

export const getImageUrl = (path: string | null | undefined) => {

    if(!path){
        return "";
    }

    return `${IMG_BASE_URL}${path}`;

}
