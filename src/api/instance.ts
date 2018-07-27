import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : ''
});

export default instance;