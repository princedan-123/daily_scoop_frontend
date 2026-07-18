import axios from "axios";

const api = axios.create({
  baseURL: " https://daily-scoop-398f1dc0.fastapicloud.dev/",
  timeout: 60000,
});

export default api;
