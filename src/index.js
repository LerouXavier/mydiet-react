import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import registerServiceWorker from './registerServiceWorker';

import {authReducers} from './auth/AuthReducers';
import {dashboardReducers} from './dashboard/DashboardReducers';
import {proportionReducers} from './proportion/ProportionReducers';
import {templateReducers} from './template/TemplateReducers';
import {App} from './App';
import './axios.config';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

export const npCombinedReducers = combineReducers({
    session: authReducers,
    dashboard: dashboardReducers,
    proportion: proportionReducers,
    template: templateReducers
});

export const npStore = createStore(
    npCombinedReducers,
    {
        proportion: {list: []},
        template: {list: []},
        session: {hasSession: false}
    },
    applyMiddleware(promiseMiddleware())
);

ReactDOM.render(<Provider store={npStore}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
