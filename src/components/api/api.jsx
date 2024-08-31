import axios from "axios";

export const API_URL = "http://10.4.56.79";
// докер +

const api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
  headers: {
    token: localStorage.getItem("authToken"),
  },
});

export default api;
