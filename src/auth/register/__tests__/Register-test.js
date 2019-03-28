import renderer from 'react-test-renderer';
import {Register} from '../Register';
import React from 'react';
import {shallow} from 'enzyme/build';
import {Login} from '../../login/Login';

describe('Register', () => {
    test('should render correctly', function () {
        const register = renderer.create(<Register/>).toJSON();
        expect(register).toMatchSnapshot();
    });

    test('should change components state after setting form elements', function () {
        const login = shallow(<Login/>);

        login
            .find('.nu-login__email')
            .simulate('change', {}, {value: 'example@ex.com'});

        expect(login.instance().state.email).toEqual('example@ex.com');
    });
});