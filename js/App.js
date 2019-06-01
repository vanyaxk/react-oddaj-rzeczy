import React from 'react';
import ReactDOM  from 'react-dom';
// import '../styles/style.css'
import { HashRouter, Route} from 'react-router-dom';
import LoginPanel from './components/LoginPanel';
import RouteLogin from './RouteLogin';
import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About';

import Foundations from './components/Foundations';


import { Header } from './components/header';
import { Footer } from './components/footer';

const App = () => {
    return (
            <HashRouter>
                <>
                <LoginPanel />
                <Navigation />
                <RouteLogin />
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
