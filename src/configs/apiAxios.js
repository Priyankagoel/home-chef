import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://192.168.0.231:3001",
  headers: {}
});

export default apiAxios;
