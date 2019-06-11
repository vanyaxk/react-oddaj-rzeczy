import React, {Component} from 'react';


import {
    RegistrationContainer,
    RegisterForm,
    RegistrationHeader,
    DataInput,
    RegistrationLinks,
    LoginLink,
    RegisterButton
} from './RegisterStyles';

class Register extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'register');
        this.state = {
            registered: false,
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            id: ''
        }
    }
    

    handleRegister = (e) => {
        e.preventDefault();
        const {email, password, name} = this.state;
        this.setState({
            registered: true
        });
        this.props.addNewUser(name, email, password);
    }

    handleInputChange = (e) => {
        const input = e.target;
        this.setState({
            [input.name] : input.value
        });
    }
    render() {
        return (
            <RegistrationContainer onSubmit={this.handleRegister}>
            <RegisterForm>
                <RegistrationHeader>Załóz konto</RegistrationHeader>
                
                    <DataInput type='text'
                                name='name' 
                                placeholder='Imię'
                                onChange={this.handleInputChange}/>
                    <DataInput type='email' 
                                name='email' 
                                placeholder='Email' 
                                onChange={this.handleInputChange}/>
                    <DataInput type='password'
                                name='password' 
                                placeholder='Hasło' 
                                onChange={this.handleInputChange}/>
                    <DataInput type='password' 
                                name='repeatPassword' 
                                placeholder='Powtórz hasło' 
                                onChange={this.handleInputChange}/>
                

                <RegistrationLinks>
                    <LoginLink to='/login'>Zaloguj się</LoginLink>
                    <RegisterButton type='submit' value='Załóz konto' />
                </RegistrationLinks>
            </RegisterForm>
            </RegistrationContainer>
        );
    }
}

export default Register;