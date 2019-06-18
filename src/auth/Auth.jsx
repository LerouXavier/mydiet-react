import * as React from 'react';
import {Route, Switch} from 'react-router';
import {Redirect} from 'react-router-dom';
import {Form, Grid, Header, Segment} from 'semantic-ui-react';

import {Login} from './login/Login';
import {Register} from './register/Register';

import video from './Bokeh Video Of Leaves.mp4';
import './Auth.css';

export const Auth = ({location, hasSession}) => {
    if (hasSession) {
        return <Redirect to="/"/>;
    }

    return (
        <React.Fragment>
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
            </video>

            <Grid centered={true} verticalAlign="middle" columns={4} stretched={true} className="np-login">
                <Grid.Column>
                    <Segment as={Form} basic={true} inverted={true} padded="very" className="np-login__form np-form">
                        <Header as="h1" icon={true} textAlign="center" inverted={true}>
                            <Header.Content className="np-login__title">MyDiet</Header.Content>
                        </Header>
                        <Switch>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </Segment>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
};
