import axios from "axios";
import { ACCESS_TOKEN, API_PORTAL_URL } from "./config";

export const api = axios.create({
    baseURL: API_PORTAL_URL,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
    },
});