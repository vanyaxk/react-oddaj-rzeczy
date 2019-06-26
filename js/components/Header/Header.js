import React, {Component} from 'react';
import LoginPanel from '../LoginPanel/LoginPanel';
import Navigation from '../Navigation/Navigation';
import RouteLogin from '../../RouteLogin';
import styled from 'styled-components';
import { Link, animateScroll } from "react-scroll";

const PageHeader = styled.div`
    width: 100%;
    height: 100vh;
`;

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

const NavigLink = styled(Link)`
    margin-left: 30px;
    padding: 10px 20px;
    font-size: 1.1em;
    color: #1a2a3a;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border .2s;
    &:hover {
        border: 1px solid #696969;
    }
`;
class Header extends Component {

    navItems = [
        {name: 'Start', link: '/', },
        {name: 'O co chodzi?', link: 'scrollToMain',},
        {name: 'O nas', link: 'scrollToAbout'},
        {name: 'Fundacje i organizacje', link: 'scrollToFoundations'},
        {name: 'Kontakt', link: 'scrollToContact'}
    ];

    jsxNav = this.navItems.map(element => {
        return <NavigLink 
                key={element.name}
                activeClass="active"
                to={element.link}
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                onMouseOver={this.funHover}
                >
                    {element.name}
                </NavigLink>
    });

    render() {
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
        } = this.props;
        return (
            <PageHeader>
                <LoginPanel handleLogOut={handleLogOut}
                            loggedIn={loggedIn}
                            name={name}/>
                <Container>
                    {this.jsxNav}
                </Container>
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
}

export { Header };