import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//react scroll

class Navigation extends Component {
    navItems = [
        {name: 'Start', link: '/'},
        {name: 'O co chodzi?', link: '.main'},
        {name: 'O nas', link: '.about'},
        {name: 'Fundacje i organizacje', link: '.foundations'},
        {name: 'Kontakt', link: '.contact'}
    ];

    render() {
        const jsxNav = this.navItems.map(element => {
            return <Link key={element.name}
                    to={element.link}>
                        {element.name}
                    </Link>
        });
        
        return (
            <nav>
                {jsxNav}
            </nav>
        )
    }
}

export default Navigation;