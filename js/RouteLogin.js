import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Stuff from './components/Stuff';

const RouteLogin = (props) => {
    const {
        loggedIn, 
        checkLoginData, 
        addNewUser, 
        handleValidateRegister,
        handleInputChange,
        error, 
        name, 
        email, 
        password, 
        repeatPassword} = props;
    return (
    <Switch>
        <Route exact path="/" render={() => <Navigation loggedIn={loggedIn}/>} />
        <Route path='/login' render={() => <Login checkLoginData={checkLoginData} 
                                                  loggedIn={loggedIn}
                                                  handleInputChange={handleInputChange}
                                            />} />
        <Route path='/register' render={() => <Register addNewUser={addNewUser}
                                                        handleValidateRegister={handleValidateRegister}
                                                        handleInputChange={handleInputChange}
                                                        error={error}
                                                        name={name}
                                                        email={email}
                                                        password={password}
                                                        repeatPassword={repeatPassword}
                                                        />} />
        <Route path='/form' render={() => <Stuff loggedIn={loggedIn}/>} />
    </Switch>
    )
};

export default RouteLogin;

