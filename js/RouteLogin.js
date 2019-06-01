import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register';
import Main from './components/Main';
import Login from './components/Login';

const RouteLogin = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
    </Switch>
);

export default RouteLogin;

