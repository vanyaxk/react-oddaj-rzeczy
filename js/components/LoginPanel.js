import React, {Component } from 'react';
import {NavLink} from 'react-router-dom';


class LoginPanel extends Component {
    loginItems = [
        {name: 'Login', link: '/login'},
        {name: 'Register', link: '/register'}
    ]
    render() {
        let jsxLogin = this.loginItems.map(element => {
            return <NavLink key={element.name}
                            exact to={element.link}>
                    {element.name}
                    </NavLink>
        });
        return (
           <section className='login-panel'>
                {jsxLogin}
           </section>
        )
    }
}

export default LoginPanel;