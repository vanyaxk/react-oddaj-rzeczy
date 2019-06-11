import React from 'react';
import LoginPanel from '../LoginPanel/LoginPanel';
import Navigation from '../Navigation/Navigation';
import RouteLogin from '../../RouteLogin';
import styled from 'styled-components';

const PageHeader = styled.div`
    width: 100%;
    height: 100vh;
`;
const Header = (props) => {
    return (
        <PageHeader>
            <LoginPanel />
            <RouteLogin checkLoginData={props.checkLoginData} loggedIn={props.loggedIn} addNewUser={props.addNewUser}/>
        </PageHeader>
    );
}

export { Header };