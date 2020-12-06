import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials":"true",
    "Access-Control-Max-Age":"1800",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  }, 
  withCredentials: false,
  baseURL: "http://localhost:5000/api",
});

export default axiosInstance;
