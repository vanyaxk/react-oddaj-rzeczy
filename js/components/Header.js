import React from 'react';
import LoginPanel from './LoginPanel';
import Navigation from './Navigation';
import RouteLogin from './../RouteLogin';
import styled from 'styled-components';

const PageHeader = styled.div`
    width: 100%;
    height: 100vh;
`;
const Header = () => {
    return (
        <PageHeader>
            <LoginPanel />
            <Navigation />
            <RouteLogin />
        </PageHeader>
    );
}

export { Header };