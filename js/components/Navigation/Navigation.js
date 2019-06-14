import React, { Component } from 'react';

import {
    Nav,
    Container,
    NavigLink,
    CallToAction,
    CTAMessage,
    CTAHeader,
    CTAButtonContainer,
    CTAButton
} from './NavigationStyles';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.selector = React.createRef();
    }
    navItems = [
        {name: 'Start', link: '/', },
        {name: 'O co chodzi?', link: 'scrollToMain',},
        {name: 'O nas', link: 'scrollToAbout'},
        {name: 'Fundacje i organizacje', link: 'scrollToFoundations'},
        {name: 'Kontakt', link: 'scrollToContact'}
    ];

    render() {
        const jsxNav = this.navItems.map(element => {
            return <NavigLink 
                    key={element.name}
                    activeClass="active"
                    to={element.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                    onMouseOver={this.funHover}
                    >
                        {element.name}
                    </NavigLink>
        });
        
        return (
            <Nav>
            <Container>
                {jsxNav}
            </Container>
            <CallToAction>
                <CTAMessage>
                    <CTAHeader>Zacznij pomagać</CTAHeader>
                    <CTAHeader>Oddaj niechciane rzeczy w zaufane ręce</CTAHeader>
                    <CTAButtonContainer>
                    <CTAButton to={this.props.loggedIn ? '/form': '/login'}>Oddaj rzeczy</CTAButton>
                    <CTAButton to='/login'>Zorganizuj zbiórkę</CTAButton>
                    </CTAButtonContainer>
                </CTAMessage>
            </CallToAction>
            </Nav>

        )
    }
}

export default Navigation;