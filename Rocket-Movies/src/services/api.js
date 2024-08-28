import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketfilms-api.onrender.com"
});