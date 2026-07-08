import { IMG_BASE_URL } from "../lib/config"

export const getPosterUrl = (path: string) =>
    `${IMG_BASE_URL}${path}`;
