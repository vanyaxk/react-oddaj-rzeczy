import React, {Component} from 'react';

import {
    FormContainer,
    ContactHeader,
    ContactData,
    ContactForm,
    ContactInput,
    ContactMessage,
    SubmitMessage
} from './ContactStyles';

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, index) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={index}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

class Contact extends Component {
    state = {
        name: '',
        email: '',
        didContact: false,
        formErrors: {email: '', message: ''},
        emailValid: false,
        messageValid: false,
        formValid: false
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'message':
            messageValid = value.length >= 6;
            fieldValidationErrors.message = messageValid ? '': ' is too short';
            break;
          default:
            break;
        }

        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            messageValid: messageValid
          }, this.validateForm);
    }

    validateForm = () => {
        this.setState({formValid: this.state.emailValid && this.state.messageValid});
      }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState({
                didContact: true
            });
        }
    }

    handleNameChange = (e) => {
        let userName = e.target.value;
        this.setState({
            name: userName
        });
        
    }

    handleEmailChange = (e) => {
        let userEmail = e.target.value;
        this.setState({
            email: userEmail
        },
        () => {this.validateField(this.state.email, userEmail)}
        );
    }

    handleMessageChange = (e) => {
        let userMessage = e.target.value;
        this.setState({
            message: userMessage
        },
        () => {this.validateField(this.state.message, userMessage)}
        )
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
        <ContactMessage placeholder='Wiadomość' onChange={this.handleMessageChange}/>
        <SubmitMessage type='submit' value='Wyślij'/>
        </ContactForm>
        <FormErrors formErrors={this.state.formErrors}/>
        </FormContainer>
        let formSubmitted = <h3>Dzięki, {this.state.name}. Odeźwiemy się do Ciebie na {this.state.email}</h3>
       if (this.state.didContact === true) return formSubmitted;

       return form;

    }
}

export default Contact;
