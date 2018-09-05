import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthorizedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                true ? <Component {...props} /> : <Redirect to="/login" from={props.location} />}
        />
    );
};
