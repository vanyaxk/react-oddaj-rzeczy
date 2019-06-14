import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

const RouteLogin = (props) => {
    const {loggedIn, checkLoginData, addNewUser} = props;
    return (
    <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path='/login' render={() => <Login checkLoginData={checkLoginData} loggedIn={loggedIn}/>} />
        <Route path='/register' render={() => <Register addNewUser={addNewUser}/>} />
    </Switch>
    )
};

export default RouteLogin;

