import axios from "axios";

import { SERVER_URL } from "@/config";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000", //SERVER_URL,
    timeout: 5000,
    headers: { 
        "Content-Type": "application/json",
    },
});

export default axiosInstance;