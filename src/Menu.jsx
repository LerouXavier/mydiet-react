import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import {authActions} from './auth/AuthActions';
import { Link } from 'react-router-dom';

import {Menu as SemMenu, Icon} from 'semantic-ui-react'

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogout: () => {
            dispatch(authActions.logout());
        }
    };
};


export const Menu = connect(null, mapDispatchToProps)(
    class extends React.Component {
        state = {activeItem: 'home'};

        handleItemClick = (e, {name}) => this.setState({activeItem: name});

        render() {
            const {activeItem} = this.state;

            return (
                <React.Fragment>
                    <SemMenu>
                        <SemMenu.Item
                            as={Link}
                            to="/"
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}>
                            <Icon name='home' />
                        </SemMenu.Item>

                        <SemMenu.Menu position='right'>
                            <SemMenu.Item
                                name='wyloguj'
                                onClick={() => this.props.dispatchLogout()}
                            />
                        </SemMenu.Menu>
                    </SemMenu>
                </React.Fragment>
            );
        }
    });