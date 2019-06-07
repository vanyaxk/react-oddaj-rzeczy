import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const LoginContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    width: 60%;
`;

const LoginHeader = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:after {
        content: url('../../images/decoration.png');
        display: block;
        width: 100%;
        transform: scale(.7);
        margin-top: 10px;
    }
`;

const EmailInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #696969;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;`;

const PasswordInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #696969;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;`;

const LoginLinks = styled.section`
    display: flex;
    justify-content: space-between;
`;

const RegisterLink = styled(Link)`
    text-decoration: none;
    color: #696969;
    padding: 10px;
`;

const LogIn = styled.input`
    outline: none;
    border: 1px solid #696969;
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;
`;

class Login extends Component {
    render() {
        return (
            <LoginContainer>
                <LoginForm>
                    <LoginHeader>Zaloguj się</LoginHeader>
                    <EmailInput type='email' placeholder='Email'/>
                    <PasswordInput type='password' placeholder='Hasło'/>

                    <LoginLinks>
                        <RegisterLink to='register'>Załóz konto</RegisterLink>
                        <LogIn type='submit' value='Zaloguj się'/>
                    </LoginLinks>
                </LoginForm>
            </LoginContainer>
        );
    }
}

export default Login;