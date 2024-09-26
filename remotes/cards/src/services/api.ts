import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: 'https://dummyjson.com/',
    });
};

const api = createAxiosInstance()

export { api };
