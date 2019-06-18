import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {Menu, Icon} from 'semantic-ui-react'

export const MainMenu = () => {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <React.Fragment>
            <Menu>
                <Menu.Item
                    as={Link}
                    to="/"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={(e, {name}) => setActiveItem(name)}>
                    <Icon name='home' />
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='wyloguj'
                        onClick={() => this.props.dispatchLogout()}
                    />
                </Menu.Menu>
            </Menu>
        </React.Fragment>
    );
};