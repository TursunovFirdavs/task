import axios, { AxiosInstance } from "axios";

export const request: AxiosInstance = axios.create({
    baseURL: 'https://no23.lavina.tech'
})