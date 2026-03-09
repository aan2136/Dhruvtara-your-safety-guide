import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const startTrip = (data) =>
  API.post("/api/trip/start", data);

export const triggerSOS = (data) =>
  API.post("/api/sos/trigger", data);

export default API;
