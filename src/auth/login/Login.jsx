import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {isEmpty as _isEmpty, get as _get, isObject as _isObject} from 'lodash';

import {Form, Message} from 'semantic-ui-react';

import {authActions} from '../AuthActions';

export const ErrorMessageType = PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.string
});

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    static defaultProps = {
        hasSession: false,
        errorMessage: null,
        submitCredentials: () => {}
    };

    static propTypes = {
        hasSession: PropTypes.bool,
        errorMessage: PropTypes.oneOfType([ErrorMessageType, PropTypes.instanceOf(null)]),
        submitCredentials: PropTypes.func
    };

    render() {
        const {submitCredentials, errorMessage} = this.props;
        const showErrorMessage = _isObject(errorMessage);
        return (
            <Form error={showErrorMessage}>
                <Form.Input
                    className="nu-login__email"
                    label="Wprowaź adres E-mail"
                    onChange={(event, element) => this.setState({email: element.value})}
                    type="email"
                />
                <Form.Input
                    className="nu-login__password"
                    label="Hasło"
                    onChange={(event, element) => this.setState({password: element.value})}
                    type="password"
                />
                {
                    errorMessage &&
                    <Message
                        error
                        header={errorMessage.header}
                        content={errorMessage.content}
                    />
                }
                <Form.Button
                    className="nu-login__submit"
                    disabled={showErrorMessage || _isEmpty(this.state.email) || _isEmpty(this.state.password)}
                    floated="right"
                    onClick={() => submitCredentials(this.state)}
                    positive={true}
                >
                    Zaloguj
                </Form.Button>
            </Form>
        );
    }
}

const mapState = ({session: {hasSession, errorMessage}}) => ({hasSession, errorMessage});

const mapDispatchToProps = (dispatch) => ({
    submitCredentials: (credentials) => {
        dispatch(authActions.login(credentials));
    }
});

export default connect(mapState, mapDispatchToProps)(Login);