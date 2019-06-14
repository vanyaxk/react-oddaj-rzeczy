import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import MainForm from './components/MainForm/MainForm';

const MainRouter = (props) => {
    const {loggedIn} = props;
    return (
    <Switch>
        <Route exact path="/" render={() => <Main loggedIn={loggedIn}/>} />
        <Route path='/form' render={() => <MainForm loggedIn={loggedIn}/>} />
    </Switch>
    )
};

export default MainRouter;

