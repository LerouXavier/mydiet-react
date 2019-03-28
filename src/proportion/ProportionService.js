import axios from 'axios';

const proportions = '/v1/proportions';

export const proportionService = {
    getProportions: () => axios.get(proportions),
    createProportion: (data) => axios.post(proportions, data),
    getProportion: (id) => axios.get(`${proportions}/${id}`),
    updateProportion: (id, data) => axios.put(`${proportions}/${id}`, data),
    deleteProportion: (id) => axios.delete(`${proportions}/${id}`)
};
