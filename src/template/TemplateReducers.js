export function templateReducers(state = {}, action) {
    switch (action.type) {
        case 'LOAD_DASHBOARD_FULFILLED':
            return {
                ...state,
                list: action.payload.data.templates
            };
        case 'LOAD_TEMPLATES_FULFILLED':
            return {
                ...state,
                list: action.payload.data
            };
        case 'GET_TEMPLATE_FULFILLED':
            return {
                ...state,
                selected: action.payload.data
            };
        case 'UPDATE_TEMPLATE_FULFILLED':
        case 'DELETE_TEMPLATE_FULFILLED':
            return {
                ...state,
                selected: null,
            };
        case 'SELECT_TEMPLATE':
            return {
                ...state,
                selected: action.template
            };
        case 'UNSELECT_TEMPLATE':
            return {
                ...state,
                selected: null
            };
        default:
            return state;
    }
}
