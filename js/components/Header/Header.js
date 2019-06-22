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
    const {
        handleLogOut, 
        loggedIn, 
        addNewUser, 
        handleValidateRegister, 
        handleInputChange,
        checkLoginData,
        error,
        name, 
        email, 
        password, 
        repeatPassword 
    } = props;
    return (
        <PageHeader>
            <LoginPanel handleLogOut={handleLogOut}
                        loggedIn={loggedIn}
                        name={name}/>
            <RouteLogin checkLoginData={checkLoginData}
                        loggedIn={loggedIn}
                        addNewUser={addNewUser}
                        handleValidateRegister={handleValidateRegister}
                        handleInputChange={handleInputChange}
                        error={error}
                        name={name}
                        email={email}
                        password={password}
                        repeatPassword={repeatPassword}
                        />
        </PageHeader>
    );
}

export { Header };