import React from 'react';

import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {AuthorizedRoute} from './auth/AuthorizedRoute';

import {Auth} from './auth/Auth';

import './App.css';
import {MainMenu} from './Menu';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export const App = ({hasSession}) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <AuthorizedRoute authorized={hasSession} path="/" component={MainMenu}/>
                <Route exact path={'/sign-up'} component={Auth}/>
                <Route exact path={'/sign-in'} component={Auth}/>
            </React.Fragment>
        </BrowserRouter>
    );
};