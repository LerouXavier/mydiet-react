import React, {useState} from 'react';

import {isEmpty as _isEmpty} from 'lodash';

import {Form} from 'semantic-ui-react';

export const Register = () => {
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    return (
        <React.Fragment>
            <Form.Input
                className="nu-register__first-name"
                label="Firstname"
                onChange={(event, element) => setCredentials({firstName: element.value})}
                required={true}
                type="text"
            />
            <Form.Input
                className="nu-register__last-name"
                label="Lastname"
                onChange={(event, element) => setCredentials({lastName: element.value})}
                required={true}
                type="text"
            />
            <Form.Input
                className="nu-register__email"
                label="E-mail"
                onChange={(event, element) => setCredentials({email: element.value})}
                required={true}
                type="email"
            />
            <Form.Input
                className="nu-register__password"
                label="Password"
                onChange={(event, element) => setCredentials({password: element.value})}
                required={true}
                type="password"
            />
            <Form.Button
                className="nu-register__submit"
                floated="right"
                positive={true}
            >
                Signup
            </Form.Button>
        </React.Fragment>
    );
}