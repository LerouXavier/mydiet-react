import axios from 'axios';

export const dashboardService = {
    getDashboard: () => axios.get('/v1/dashboard')
};
