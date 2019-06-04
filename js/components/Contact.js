import React, {Component} from 'react';

import styled from 'styled-components';

const FormContainer = styled.section`
    width: 500px;
    min-height: 400px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const ContactHeader = styled.h4`
    font-size: 2rem;
    text-align: center;

    &:after {
        content: url('./../../images/decoration.png');
        display: block;
        width: 100%;
        margin-top: 20px;
        transform: scale(.8);
    }
`;

const ContactData = styled.section`
    display: flex;
    justify-content: space-between;
`;

const ContactForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    padding: 10px;
    justify-content: center;
`;

const ContactInput = styled.input`
    width: 48%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 1rem;
    padding: 10px 5px;
    border-bottom: .5px solid #696969;

    &::-webkit-input-placeholder {
        padding-left: 10px;
        font-size: 1rem;
        font-weight: 300;
    }

    &:first-of-type {
        margin-right: 5px;
    }
`;

const ContactMessage = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    background: transparent;
    padding: 15px 0 0 10px;
    line-height: 15px;
    border-bottom: 1px solid #696969;
    font-size: 1rem;

    &::-webkit-input-placeholder {
        font-size: 1rem;
        font-weight: 300;
    }

    &:focus {
        outline: none;
    }
`;

const SubmitMessage = styled.input`
    width: 100px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    padding: 10px 20px;
    margin: 40px auto 0;
    border: 1px solid #696969;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
        background-color: #fff;
        border: 1px solid transparent;
    }
`;

class Contact extends Component {
    state = {
        name: '',
        email: '',
        didContact: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            didContact: true
        });
    }

    handleNameChange = (e) => {
        let userName = e.target.value;
        this.setState( {
            name: userName
        });
        console.log(this.state.name);
    }

    handleEmailChange = (e) => {
        let userEmail = e.target.value;
        this.setState({
            email: userEmail
        })
    }
    render() {
        let form =
        <FormContainer>
        <ContactHeader>Skontaktuj się z nami</ContactHeader>
        <ContactForm onSubmit={this.handleSubmit}>
        <ContactData>
            <ContactInput type='text' value={this.state.name} onChange={this.handleNameChange} placeholder='Imię'/>
            <ContactInput type='email' value={this.state.email} onChange={this.handleEmailChange} placeholder='Email'/>
        </ContactData>
        <ContactMessage placeholder='Wiadomość'/>
        <SubmitMessage type='submit' value='Wyślij'/>
        </ContactForm>
        </FormContainer>
        let formSubmitted = <h3>Dzięki, {this.state.name}. Odeźwiemy się do Ciebie na {this.state.email}</h3>
       if (this.state.didContact === true) return formSubmitted;

       return form;

    }
}

export default Contact;
