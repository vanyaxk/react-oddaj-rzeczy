import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Stuff from './components/Stuff';

const RouteLogin = (props) => {
    const {loggedIn, checkLoginData, addNewUser} = props;
    return (
    <Switch>
        <Route exact path="/" render={() => <Navigation loggedIn={loggedIn}/>} />
        <Route path='/login' render={() => <Login checkLoginData={checkLoginData} loggedIn={loggedIn}/>} />
        <Route path='/register' render={() => <Register addNewUser={addNewUser}/>} />
        <Route path='/form' render={() => <Stuff loggedIn={loggedIn}/>} />
    </Switch>
    )
};

export default RouteLogin;

