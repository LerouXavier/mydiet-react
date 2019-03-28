import { proportionService } from './ProportionService';

export const proportionActions = {
    loadProportions: () => {
        return {
            type: 'LOAD_PROPORTIONS',
            payload: proportionService.getProportions()
        };
    },
    createProportion: (data) => {
        return {
            type: 'CREATE_PROPORTION',
            payload: proportionService.createProportion(data)
        };
    },
    getProportion: (id) => {
        return {
            type: 'GET_PROPORTION',
            payload: proportionService.getProportion(id)
        };
    },
    updateProportion: (data) => {
        return {
            type: 'UPDATE_PROPORTION',
            payload: proportionService.updateProportion(data._id, data)
        };
    },
    deleteProportion: (id) => {
        return {
            type: 'DELETE_PROPORTION',
            payload: proportionService.deleteProportion(id)
        };
    },
    selectProportion: (data) => {
        return {
            type: 'SELECT_PROPORTION',
            proportion: data
        }
    },
    unselectProportion: () => {
        return {
            type: 'UNSELECT_PROPORTION'
        }
    }
};
