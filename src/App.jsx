import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import {Login} from './login/Login';
import {Dashboard} from './dashboard/Dashboard';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*<Notification />*/}
                <Switch>
                    <Route path="/login" component={Login}/>
                    <React.Fragment>
                        {/*<Route path="/" component={Menu} />*/}
                        <Route
                            path="/"
                            component={Dashboard}
                        />
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
