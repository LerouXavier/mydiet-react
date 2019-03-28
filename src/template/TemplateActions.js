import { templateService } from './TemplateService';

export const templateActions = {
    loadTemplates: () => {
        return {
            type: 'LOAD_TEMPLATES',
            payload: templateService.getTemplates()
        };
    },
    createTemplate: (data) => {
        return {
            type: 'CREATE_TEMPLATE',
            payload: templateService.createTemplate(data)
        };
    },
    getTemplate: (id) => {
        return {
            type: 'GET_TEMPLATE',
            payload: templateService.getTemplate(id)
        };
    },
    updateTemplate: (data) => {
        return {
            type: 'UPDATE_TEMPLATE',
            payload: templateService.updateTemplate(data._id, data)
        };
    },
    deleteTemplate: (id) => {
        return {
            type: 'DELETE_TEMPLATE',
            payload: templateService.deleteTemplate(id)
        };
    },
    selectTemplate: (data) => {
        return {
            type: 'SELECT_TEMPLATE',
            template: data
        }
    },
    unselectTemplate: () => {
        return {
            type: 'UNSELECT_TEMPLATE'
        }
    }
};
