import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isUndefined as _isUndefined} from 'lodash'

export const AuthorizedRoute = ({ component: Component, render, ...rest }) => {
    if (_isUndefined(rest.authorized)) {
        throw new Error('You must provide an authorization status!');
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                const previous = props.location.pathname;
                const toRender = render ? render(props) : <Component {...props} />;

                return rest.authorized || ['/login', '/register'].includes(previous)
                    ? toRender
                    : <Redirect to="/login" from={previous} />
            }}
        />
    );
};
