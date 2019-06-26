import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

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
    constructor(props) {
        super(props);

        this.state = { 
            email: '',
            password: ''
        }
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        this.props.checkLoginData(email, password);
        this.props.history.push('/');
    }

    handleInputChange = (e) => {
        const input = e.target;
        this.setState({
            [input.name]: input.value
        });
    }

    render() {
        
        return (
            <LoginContainer>
                <LoginForm onSubmit={this.handleLoginSubmit}>
                    <LoginHeader>Zaloguj się</LoginHeader>
                    <EmailInput type='email' 
                                name='email'
                                placeholder='Email'
                                value={this.state.email} 
                                onChange={this.handleInputChange}/>
                    <PasswordInput type='password' 
                                    name='password'
                                    placeholder='Hasło' 
                                    value={this.state.password} 
                                    onChange={this.handleInputChange}/>
                    <LoginLinks>
                        <RegisterLink to='register'>Załóz konto</RegisterLink>
                        <LogIn type='submit' value='Zaloguj się'/>
                    </LoginLinks>
                </LoginForm>
            </LoginContainer>
        );
    }
}

export default withRouter(Login);