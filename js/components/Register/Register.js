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
    render() {
        return (
            <RegistrationContainer>
            <RegisterForm>
                <RegistrationHeader>Załóz konto</RegistrationHeader>
                
                    <DataInput type='text' placeholder='Imię'/>
                    <DataInput type='email' placeholder='Email'/>
                    <DataInput type='password' placeholder='Hasło'/>
                    <DataInput type='password' placeholder='Powtórz hasło'/>
                

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