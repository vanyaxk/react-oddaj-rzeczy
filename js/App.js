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
        userName: false
    }
    
    checkLoginData = (userName, password) => {
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
                if(user.userName === userName && user.password === password){
                    console.log('login successfull')
                    this.setState({
                        loggedIn: true,
                        userName: userName
                    })
                    return true
                }
                console.log('login unsuccessful')
                return false
            })
        }).catch(err => {
            this.setState({
                error : err.message
            })
            console.log("Error:" + err.message)
        })
    }

    render() {
        return (
            <HashRouter>
                <>
                <GlobalReset />
                <Header checkLoginData={this.checkLoginData} loggedIn={this.state.loggedIn}/>
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
