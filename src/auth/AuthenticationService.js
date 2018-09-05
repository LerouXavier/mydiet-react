import axios from 'axios';

export const authenticationService = {
    login: (credentials) => {
        return axios.post('/v1/login', credentials);
    },

    logout: () => {
        return axios.post('/v1/logout', null);
    },

    refresh: () => {
        return axios.post('//refresh-token');
    }
};
