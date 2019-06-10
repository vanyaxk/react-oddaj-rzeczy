import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    LoginContainer,
    LoginForm,
    LoginHeader, 
    EmailInput, 
    PasswordInput,
    LoginLinks,
    RegisterLink,
    LogIn,
    } from './LoginStyles';




class Login extends Component {
    state = { 
        login:'',
        password: ''
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const {login, password} = this.state;
        this.props.checkLoginData(login, password);
    }

    handleInputChange = (e) => {
        const input = e.target;
        this.setState({
            [input.name] : input.value
        });
    }

    render() {
        return (
            <LoginContainer>
                <LoginForm onSubmit={this.handleLoginSubmit}>
                    <LoginHeader>Zaloguj się</LoginHeader>
                    <EmailInput type='email' placeholder='Email' value={this.state.email}/>
                    <PasswordInput type='password' placeholder='Hasło' value={this.state.password}/>
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