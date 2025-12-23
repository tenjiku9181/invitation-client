import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5200/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Accept-Language"] = localStorage.getItem("invite-lang") || "en";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            alert("API Error: " + error.response.data);
        } else {
            alert("Network Error:" + error.message);
        }

        return Promise.reject(error);
    }
);


export default apiClient;