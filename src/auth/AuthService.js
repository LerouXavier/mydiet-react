import axios from 'axios';

export const authService = {
    login: (credentials) => axios.post('/v1/login', credentials),
    logout: () => axios.get('/v1/logout', null),
    register: (credentials) => axios.post('/v1/register', credentials)
};
