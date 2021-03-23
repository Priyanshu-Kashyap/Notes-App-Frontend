import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
export const setClientToken = (token: string) => {
  localStorage.setItem("token", token);
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    console.log(config);
    return config;
  });
};
