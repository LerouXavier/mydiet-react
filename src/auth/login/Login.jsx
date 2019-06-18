import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {isEmpty as _isEmpty} from 'lodash';

import {Form, Message} from 'semantic-ui-react';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    return (
        <Form error={true}>
            <Form.Input
                className="nu-login__email"
                label="E-mail"
                onChange={(event, element) => setCredentials({email: element.value})}
                type="email"
            />
            <Form.Input
                className="nu-login__password"
                label="Password"
                onChange={(event, element) => setCredentials({password: element.value})}
                type="password"
            />
            <Form.Button
                className="nu-login__submit"
                disabled={false}
                floated="right"
                positive={true}
            >
                Login
            </Form.Button>
        </Form>
    );
}