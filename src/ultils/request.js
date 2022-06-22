import axios from 'axios';

const request = axios.create(
    {
        baseURL: 'http://localhost:3005/'
        // baseURL: 'http://192.168.1.156:3005/'
    }
);

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response
}

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response
}

export const remove = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response
}

export const filter = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response
}

export default request;