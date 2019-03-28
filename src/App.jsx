import React from 'react';
import {connect} from 'react-redux';

import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {AuthorizedRoute} from './auth/AuthorizedRoute';

import {Auth} from './auth/Auth';
import {Dashboard} from './dashboard/Dashboard';

import './App.css';
import {Menu} from './Menu';
import {ProportionEditor} from './proportion/ProportionEditor';
import {TemplateEditor} from './template/TemplateEditor';
import {TemplateIssue} from './template/TemplateIssue';

const mapStateToProps = (state) => ({
    hasSession: state.session.hasSession
});

export const App = connect(mapStateToProps, null)(({hasSession}) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <AuthorizedRoute authorized={hasSession} path="/" component={Menu}/>
                <Route exact path={'/register'} component={Auth}/>
                <Route exact path={'/login'} component={Auth}/>
                <Switch>
                    <AuthorizedRoute authorized={hasSession} path="/template/:templateId/issue" component={TemplateIssue}/>
                    <AuthorizedRoute authorized={hasSession} path="/template/:templateId" component={TemplateEditor}/>
                    <AuthorizedRoute authorized={hasSession} path="/proportion/:proportionId" component={ProportionEditor}/>
                </Switch>
                <AuthorizedRoute authorized={hasSession} path='/' component={Dashboard}/>
            </React.Fragment>
        </BrowserRouter>
    );
});