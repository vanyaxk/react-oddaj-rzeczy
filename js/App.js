import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import {HashRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import About from './components/About';
//styled-components
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

import Foundations from './components/Foundations/Foundations';


import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const GlobalReset = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            email: '',
            password: '',
            repeatPassword: '',
            name: '',
            error: ''
        }
    }


    handleValidateRegister = () => {
        let valid = true;
        const {email, password, repeatPassword, name} = this.state;
        let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (emailRegex.test(email) === false) {
            valid = false;
            this.setState({
                error: 'Email is invalid'
            });
        }

        if (password !== repeatPassword) {
            valid = false;
            this.setState({
                error: 'Passwords don\'t match'
            })
        }

        if (name.length <= 2) {
            valid = false;
            console.log(name.length);
            this.setState({
                error: 'Name should have at least 2 characters'
            });
        }

        return valid;
    }
    

    addNewUser = (name, email, password) => {
        fetch("http://localhost:3002/users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: email,
              name: name,
              email: email,
              password: password
            })
          })
          .then(resp => {
              if (resp.ok) {
                  return resp.json();
              }
          })
          .catch(err => {
              console.log('Error: ' + err);
          });
    };
    

    //methods for login component
    checkLoginData = (email, password) => {
        fetch("http://localhost:3002/users")
        .then(resp => {
            if(resp.ok){
                return resp.json();
            } else {
                throw new Error("Error during connection");
            }
        }).then(data => {
            if (!data || data.length === 0){
                throw new Error('error')
            }
            data.filter(user =>{
                console.log(user);
                if(user.email === email && user.password === password){
                    this.setState({
                        loggedIn: true,
                        email: email,
                        name: user.name
                    });
                    return true;
                    
                }
                console.log('login unsuccessful');
                return false;
            })
        }).catch(err => {
            this.setState({
                error : err.message
            })
            console.log("Error:" + err.message)
        })
    }

    handleLogOut = () => {
        this.setState({
            loggedIn: false
        });
    }

    //universal function for forms 

    handleInputChange = (key) => (e) => {
        const input = e.target;
        this.setState({
            [key] : input.value
        });
    }

    render() {
        const {loggedIn, error, name, email, password, repeatPassword} = this.state;
        return (
            <HashRouter>
                <>
                <GlobalReset />
                <Header checkLoginData={this.checkLoginData}
                        loggedIn={loggedIn}
                        addNewUser={this.addNewUser}
                        handleValidateRegister={this.handleValidateRegister}
                        handleInputChange={this.handleInputChange}
                        error={error}
                        handleLogOut={this.handleLogOut}
                        name={name}
                        email={email}
                        password={password}
                        repeatPassword={repeatPassword}
                        />
                <MainRouter loggedIn={loggedIn}
                            handleInputChange={this.handleInputChange}
                />
                <About />
                
                <Foundations />
                <Footer handleInputChange={this.handleInputChange}/>
                </>
            </HashRouter>
    );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
