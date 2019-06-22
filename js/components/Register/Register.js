import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


import {
    RegistrationContainer,
    RegisterForm,
    RegistrationHeader,
    DataInput,
    RegistrationLinks,
    LoginLink,
    RegisterButton,
    ErrorSpan
} from './RegisterStyles';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registered: false
        }
    }
    

    handleRegister = (e) => {
        e.preventDefault();
        const {email, password, name} = this.props;
        this.setState({
            registered: true
        });
        if ( this.props.handleValidateRegister()) {
            this.props.addNewUser(name, email, password);
            this.props.history.push('/login');
        }
    }
    render() {
        const {email, password, repeatPassword, name} = this.props;
        return (
            <RegistrationContainer onSubmit={this.handleRegister}>
            <RegisterForm>
                <RegistrationHeader>Załóz konto</RegistrationHeader>
                
                    <DataInput type='text'
                                name='name'
                                value={name}
                                placeholder='Imię'
                                onChange={this.props.handleInputChange('name')}/>
                    <DataInput type='email' 
                                name='email' 
                                value={email}
                                placeholder='Email' 
                                onChange={this.props.handleInputChange('email')}/>
                    <DataInput type='password'
                                name='password' 
                                value={password}
                                placeholder='Hasło' 
                                onChange={this.props.handleInputChange('password')}/>
                    <DataInput type='password' 
                                name='repeatPassword' 
                                value={repeatPassword}
                                placeholder='Powtórz hasło' 
                                onChange={this.props.handleInputChange('repeatPassword')}/>
                
                    {this.props.error && <ErrorSpan>{this.props.error}</ErrorSpan>}
                <RegistrationLinks>
                    <LoginLink to='/login'>Zaloguj się</LoginLink>
                    <RegisterButton type='submit' value='Załóz konto' />
                </RegistrationLinks>
            </RegisterForm>
            </RegistrationContainer>
        );
    }
}

export default withRouter(Register);