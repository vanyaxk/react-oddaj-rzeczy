import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';



const Nav = styled.nav`
    width: 100%;    
`;

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

  const NavigLink = styled(Link)`
    margin-left: 30px;
    padding: 10px 20px;
    font-size: 1.1em;
    color: #1a2a3a;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border .2s;
    &:hover {
        border: 1px solid #696969;
    }
`;



const CallToAction = styled.div`
    display: flex;
    height: calc(100vh - 65px);
    background: url('./../../images/header_start_img.jpg') no-repeat bottom center / cover;
    position: relative;
`;


const CTAMessage = styled.div`
    width: 40%:
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: space-around;
    text-align: center;
    position: absolute;
    right: 5%;
    top: 45%;
    transform: translate(-5%, -50%);
`;

const CTAHeader = styled.h3`
    font-size: 1.7em;
    margin-bottom: 15px;
    &:last-of-type {
        &:after {
            content: url('../../images/decoration.png');
            display: block;
            width: 100%;
        }
    }
`;

const CTAButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CTAButton = styled.button`
    outline: none;
    appearance: none;
    border: 1px solid #696969;
    padding: 15px;
    font-size: 1.3em;
    color: #1a2a3a;
    width: 175px;
    text-transform: uppercase;
`;


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
                    offset={-70}
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
                    <CTAButton>Oddaj rzeczy</CTAButton>
                    <CTAButton>Zorganizuj zbiórkę</CTAButton>
                    </CTAButtonContainer>
                </CTAMessage>
            </CallToAction>
            </Nav>

        )
    }
}

export default Navigation;