import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';

const RouteLogin = () => (
    <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
    </Switch>
);

export default RouteLogin;

