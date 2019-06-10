import React, {Component} from 'react';

import styled from 'styled-components';

import {
    FormContainer,
    ContactHeader,
    ContactData,
    ContactForm,
    ContactInput,
    ContactMessage,
    SubmitMessage
} from './ContactStyles';

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
