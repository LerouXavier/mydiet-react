import { dashboardService } from './DashboardService';

export const dashboardActions = {
    loadDashboard: () => {
        return {
            type: 'LOAD_DASHBOARD',
            payload: dashboardService.getDashboard()
        };
    }
};
