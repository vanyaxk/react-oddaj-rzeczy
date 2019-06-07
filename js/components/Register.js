import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const RegistrationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
`;

const RegisterForm = styled.form`
    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
`;

const RegistrationHeader = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:after {
        content: url('../../images/decoration.png');
        display: block;
        transform: scale(.7);
    }
`;

const DataInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #696969;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;
`;

const RegistrationLinks = styled.section`
    display: flex;
    justify-content: space-between;
`;

const LoginLink = styled(Link)`
    text-decoration: none;
    color: #696969;
    padding: 10px;
`;

const RegisterButton = styled.input`
    border: 1px solid #696969;
    outline: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;
`;


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