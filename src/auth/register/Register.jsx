import * as React from 'react';
import {connect} from 'react-redux';

import {isEmpty as _isEmpty} from 'lodash';

import {Form} from 'semantic-ui-react';

import {authActions} from '../AuthActions';

export class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        language: 'polish',
        email: '',
        password: ''
    };

    render() {
        const {submitForm} = this.props;
        return (
            <React.Fragment>
                <Form.Input
                    className="nu-register__first-name"
                    label="Imię"
                    onChange={(event, element) => this.setState({firstName: element.value})}
                    type="text"
                />
                <Form.Input
                    className="nu-register__last-name"
                    label="Nazwisko"
                    onChange={(event, element) => this.setState({lastName: element.value})}
                    type="text"
                />
                <Form.Input
                    className="nu-register__email"
                    label="Wprowaź adres E-mail"
                    onChange={(event, element) => this.setState({email: element.value})}
                    required={true}
                    type="email"
                />
                <Form.Input
                    className="nu-register__password"
                    label="Hasło"
                    onChange={(event, element) => this.setState({password: element.value})}
                    required={true}
                    type="password"
                />
                <Form.Button
                    className="nu-register__submit"
                    disabled={_isEmpty(this.state.email) || _isEmpty(this.state.password)}
                    floated="right"
                    onClick={() => submitForm(this.state)}
                    positive={true}
                >
                    Zarejestruj
                </Form.Button>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (credentials) => {
            dispatch(authActions.register(credentials));
        }
    };
};

export default connect(null, mapDispatchToProps)(Register);