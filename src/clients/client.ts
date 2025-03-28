import axios from "axios";

export const client = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    timeout: 10000,
    headers: {
        'x-api-key': import.meta.env.VITE_CAT_API_KEY,
    },
});