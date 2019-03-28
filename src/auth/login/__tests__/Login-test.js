import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from '../Login';

Enzyme.configure({adapter: new Adapter()});

describe('LoginComponent', function () {

    test('should render correctly', function () {
        const login = renderer.create(<Login/>).toJSON();
        expect(login).toMatchSnapshot();
    });

    test('should change the state after setting email', function () {
        const login = shallow(<Login/>);

        login
            .find('.nu-login__email')
            .simulate('change', {}, {value: 'example@ex.com'});

        expect(login.instance().state.email).toEqual('example@ex.com');
    });

    test('should change the state after setting password', function () {
        const login = shallow(<Login/>);

        login
            .find('.nu-login__password')
            .simulate('change', {}, {value: 'pass123'});

        expect(login.instance().state.password).toEqual('pass123');
    });

    test('should Login button be disabled while email and password are empty', function () {
        const login = shallow(<Login/>);

        expect(login.find('.nu-login__submit').prop('disabled')).toBeTruthy();
    });

    test('should enable Login button if email and password are provided', function () {
        const login = shallow(<Login/>);

        login
            .find('.nu-login__email')
            .simulate('change', {}, {value: 'example@ex.com'});

        expect(login.find('.nu-login__submit').prop('disabled')).toBeTruthy();

        login
            .find('.nu-login__password')
            .simulate('change', {}, {value: 'pass123'});


        expect(login.find('.nu-login__submit').prop('disabled')).toBeFalsy();
    });

    test('should run submitCredentials with one object attribute with credentials', function () {
        const submitCredentialsMock = jest.fn();
        const login                 = shallow(<Login submitCredentials={submitCredentialsMock}/>);

        login
            .find('.nu-login__email')
            .simulate('change', {}, {value: 'example@ex.com'});

        login
            .find('.nu-login__password')
            .simulate('change', {}, {value: 'pass123'});

        login
            .find('.nu-login__submit')
            .simulate('click');

        expect(submitCredentialsMock)
            .toBeCalledWith({email: 'example@ex.com', password: 'pass123'});
    });

    test('should display error message when credentials are incorrect', function () {
        const login = renderer.create(
            <Login
                errorMessage={{
                    header: 'Wrong credentials',
                    content: 'The credentials you supplied were not correct or did not grant access to this resource.'
                }}
            />
        ).toJSON();
        expect(login).toMatchSnapshot();
    });
});