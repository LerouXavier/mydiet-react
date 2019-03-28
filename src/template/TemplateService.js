import axios from 'axios';

const templates = '/v1/templates';

export const templateService = {
    getTemplates: () => axios.get(templates),
    createTemplate: (data) => axios.post(templates, data),
    getTemplate: (id) => axios.get(`${templates}/${id}`),
    updateTemplate: (id, data) => axios.put(`${templates}/${id}`, data),
    deleteTemplate: (id) => axios.delete(`${templates}/${id}`)
};
