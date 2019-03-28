import { authService } from './AuthService';

export const authActions = {
    login: (credentials) => {
        return {
            type: 'LOGIN',
            payload: authService.login(credentials)
        };
    },
    logout: () => {
        return {
            type: 'LOGOUT',
            payload: authService.logout()
        };
    },
    register: (credentials) => {
        return {
            type: 'REGISTER',
            payload: authService.register(credentials)
        }
    }
};
