import {parse} from 'cookie-parse'
import {get as _get} from 'lodash';
export function authReducers(state = {hasSession: true, errorMessage: ''}, action) {
    const cookies = parse(document.cookie);
    switch (action.type) {
        case 'LOGIN_FULFILLED':
        case 'REGISTER':
            return {
                ...state,
                hasSession: action.payload.status === 200
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                errorMessage: action.payload.status === 401 ? 'Niepoprawny login lub hasło' : '',
                hasSession: false
            };
        case 'LOGOUT_FULFILLED':
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                hasSession: action.payload.status !== 200
            };
        default:
            return _get(action, 'payload.response.status') === 401 ? {
                ...state,
                hasSession: false
            } : state;
    }
}
