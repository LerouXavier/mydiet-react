export function proportionReducers(state = {}, action) {
    switch (action.type) {
        case 'LOAD_DASHBOARD_FULFILLED':
            return {
                ...state,
                list: action.payload.data.proportions
            };
        case 'LOAD_PROPORTIONS_FULFILLED':
            return {
                ...state,
                list: action.payload.data
            };
        case 'GET_PROPORTION_FULFILLED':
            return {
                ...state,
                selected: action.payload.data
            };
        case 'UPDATE_PROPORTION_FULFILLED':
        case 'DELETE_PROPORTION_FULFILLED':
            return {
                ...state,
                selected: null,
            };
        case 'SELECT_PROPORTION':
            return {
                ...state,
                selected: action.proportion
            };
        case 'UNSELECT_PROPORTION':
            return {
                ...state,
                selected: null
            };
        default:
            return state;
    }
}
