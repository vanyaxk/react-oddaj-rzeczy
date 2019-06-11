import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';

const RouteLogin = (props) => {
    const {loggedIn, checkLoginData, addNewUser} = props;
    console.log(loggedIn, checkLoginData);
    return(
    <Switch>
        <Route exact path="/" component={Navigation} />
        <Route path='/login' render={() => <Login checkLoginData={checkLoginData} loggedIn={loggedIn}/>} />
        <Route path='/register' render={() => <Register addNewUser={addNewUser}/>} />
    </Switch>
    )
};

export default RouteLogin;

