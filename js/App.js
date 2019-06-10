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
    // state = {

    // }
    // handleClick

    render() {
        return (
            <HashRouter>
                <>
                <GlobalReset />
                <Header />
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
