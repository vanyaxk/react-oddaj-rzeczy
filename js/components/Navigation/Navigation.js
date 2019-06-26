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
    
    render() {
        return (
            <Nav>
            <CallToAction>
                <CTAMessage>
                    <CTAHeader>Zacznij pomagać</CTAHeader>
                    <CTAHeader>Oddaj niechciane rzeczy w zaufane ręce</CTAHeader>
                    <CTAButtonContainer>
                    <CTAButton to={this.props.loggedIn ? '/form' : '/login'}>Oddaj rzeczy</CTAButton>
                    <CTAButton to={this.props.loggedIn ? '/form' : '/login'}>Zorganizuj zbiórkę</CTAButton>
                    </CTAButtonContainer>
                </CTAMessage>
            </CallToAction>
            </Nav>

        )
    }
}

export default Navigation;