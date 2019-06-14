import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main';
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
    state = {
        loggedIn: false,
        email: false,
        name: '',
        error: ''
    }

    handleLogOut = () => {
        this.setState({
            loggedIn: false
        });
        console.log('clicked');
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
          .then(respJSON => {
            console.log(respJSON);
          })
          .catch(err => {
              console.log('Error: ' + err);
          });
    };
    
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
                    console.log('login successfull')
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

    render() {
        console.log(this.props, this.state);
        return (
            <HashRouter>
                <>
                <GlobalReset />
                <Header checkLoginData={this.checkLoginData}
                        loggedIn={this.state.loggedIn}
                        addNewUser={this.addNewUser}
                        handleLogOut={this.handleLogOut}
                        name={this.state.name}
                        />
                <Main />
                <About />
                
                <Foundations />
                <Footer />
                </>
            </HashRouter>
    );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
