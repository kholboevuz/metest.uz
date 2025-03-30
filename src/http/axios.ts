import axios from "axios";

export const SERVER_URL = "https://api.ytest.uz/api/v1";

export const axiosClient = axios.create({
    baseURL: SERVER_URL,

    headers: {
        "Content-Type": "application/json",
    },
    maxBodyLength: Infinity,
});