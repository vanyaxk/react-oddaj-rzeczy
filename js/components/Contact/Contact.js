import React, {Component} from 'react';

import {
    FormContainer,
    ContactHeader,
    ContactData,
    ContactForm,
    ContactInput,
    ContactMessage,
    SubmitMessage,
    ErrorMessage,
    FormSubmitted
} from './ContactStyles';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        didContact: false,
        emailValid: false,
        emailError: false,
        messageError: false
    }

    validateForm = (e) => {
      let valid = true;
      let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

      this.setState({
          emailError: false,
          messageError: false
      });
      if (emailRegex.test(this.state.email) === false) {
          valid = false;
          this.setState({
              emailError: 'Email is invalid'
          });
      }

      if (this.state.message.length <= 4) {
          valid = false;
          this.setState({
              messageError: 'Message must be at least 5 characters long'
          });
          
      }
      return valid;
  }
    //onBlur validation
    validateEmail = () => {
        let valid = true;
        let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (emailRegex.test(this.state.email) === false) {
            valid = false;
            this.setState({
                emailError: 'Email is invalid'
            });
        }

        return valid;
    }

    validateMessage = () => {
        let valid = true;
        if (this.state.message.length <= 4) {
            valid = false;
            this.setState({
                messageError: 'Message must be at least 5 characters long'
            });
            
        }
        return valid;
    }

    //form submission
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState({
                didContact: true
            });
            console.log('it works');
        }
    }

    // handleNameChange = (e) => {
    //     let userName = e.target.value;
    //     this.setState({
    //         name: userName
    //     });
        
    // }

    // handleEmailChange = (e) => {
    //     let userEmail = e.target.value;
    //     this.setState({
    //         email: userEmail
    //     });
    // }

    handleChangeInput = (key) => (e) => {  //funkcja następująca
        this.setState({
            [key]: e.target.value
        });
    } 

    // handleMessageChange = (e) => {
    //     let userMessage = e.target.value;
    //     this.setState({
    //         message: userMessage
    //     });
    // }

    render() {
        let form =
        <FormContainer>
        <ContactHeader>Skontaktuj się z nami</ContactHeader>
        <ContactForm onSubmit={this.handleSubmit}>
        <ContactData>
            <ContactInput type='text' 
                          value={this.state.name} 
                          onChange={this.handleChangeInput('name')} 
                          placeholder='Imię'/>
            <ContactInput type='email' 
                          value={this.state.email} 
                          onChange={(e) => this.props.handleChangeInput('email')} 
                          onBlur={this.validateEmail} 
                          placeholder='Email'/>
        </ContactData>
        {this.state.emailError && <ErrorMessage>{this.state.emailError}</ErrorMessage>}
        <ContactMessage placeholder='Wiadomość' 
                        value={this.state.message}
                        onChange={this.handleChangeInput('message')}
                        onBlur={this.validateMessage}
                        />
        {this.state.messageError && <ErrorMessage>{this.state.messageError}</ErrorMessage>}
        <SubmitMessage type='submit' value='Wyślij'/>
        </ContactForm>
        </FormContainer>
        let formSubmitted = <FormSubmitted>Dzięki, {this.state.name}. Odeźwiemy się do Ciebie na {this.state.email}</FormSubmitted>
       if (this.state.didContact === true) return formSubmitted;

       return form;

    }
}

export default Contact;
