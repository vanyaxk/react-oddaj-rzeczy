import React, {Component} from 'react';

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
        let form = <form className='contact-form' onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.name} onChange={this.handleNameChange} placeholder='Imię'/>
        <input type='email' value={this.state.email} onChange={this.handleEmailChange} placeholder='Email'/>
        <textarea placeholder='Wiadomość'/>
        <input type='submit' value='Wyślij'/>
        </form>;
        let formSubmitted = <h3>Dzięki, {this.state.name}. Odeźwiemy się do Ciebie na {this.state.email}</h3>
       if (this.state.didContact === true) return formSubmitted;

       return form;

    }
}

export default Contact;
