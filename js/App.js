import React from 'react';
import ReactDOM  from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
//styled-components
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

import Foundations from './components/Foundations';


import { Header } from './components/header';
import { Footer } from './components/footer';

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

const App = () => {
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
    )};

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
