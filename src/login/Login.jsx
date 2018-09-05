import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {isEmpty as _isEmpty} from 'lodash';

import {Form, Header, Grid, Segment} from 'semantic-ui-react';

import {authenticationService} from '../auth/AuthenticationService';
import video from './Bokeh Video Of Leaves.mp4';
import './Login.css';

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        // const {location, user} = this.props;
        // const {from} = location.state || {from: {pathname: '/'}};
        //
        // if (user !== null) {
        //     return <Redirect to={from}/>;
        // }

        return (
            <React.Fragment>
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>

                <Grid centered={true} verticalAlign="middle" columns={4} stretched={true} className="np-login">
                    <Grid.Column>
                        <Segment as={Form} basic={true} inverted={true} padded="very" className="np-login__form np-form">
                            <Header as="h1" icon={true} textAlign="center" inverted={true}>
                                <Header.Content className="np-login__title">Nutritional Plan</Header.Content>
                            </Header>
                            <Form.Input
                                label="Wprowaź adres E-mail"
                                type="email"
                                onChange={(event, element) => this.setState({email: element.value})}
                            />
                            <Form.Input
                                label="Hasło"
                                type="password"
                                onChange={(event, element) => this.setState({password: element.value})}
                            />
                            <Form.Button
                                onClick={() => authenticationService.login(this.state)}
                                disabled={_isEmpty(this.state.email) || _isEmpty(this.state.password)}
                                positive={true}
                                floated="right"
                            >
                                Sign In
                            </Form.Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}