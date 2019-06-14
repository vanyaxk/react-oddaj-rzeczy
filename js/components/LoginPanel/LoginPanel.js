import React, {Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import LoggedIn from './../LoggedIn/';

const LoginSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

const LoginLink = styled(NavLink)`
    margin-left: 5px;
    padding: 10px 20px;
    text-decoration: none;
    color: #696969;
`;


class LoginPanel extends Component {
    loginItems = [
        {name: 'Login', link: '/login'},
        {name: 'Register', link: '/register'}
    ]
    render() {
        console.log(this.props, 'loginpanel');
        const {handleLogOut, loggedIn, name} = this.props;
        let jsxLogin = this.loginItems.map(element => {
            return <LoginLink key={element.name}
                            exact to={element.link}>
                    {element.name}
                    </LoginLink>
        });
        if (loggedIn === true) return <LoggedIn handleLogOut={handleLogOut}
                                                loggedIn={loggedIn}
                                                name={name}
                                                />
        return (
           <LoginSection>
                {jsxLogin}
           </LoginSection>
        )
    }
}

export default LoginPanel;