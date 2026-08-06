import axios from "axios";

const api = axios.create({
  baseURL: "https://amrut-jeevan-ayurveda-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;