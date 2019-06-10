import styled from 'styled-components';
import { Link, animateScroll } from "react-scroll";

export const Nav = styled.nav`
    width: 100%;    
`;

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;

  export const NavigLink = styled(Link)`
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



export const CallToAction = styled.div`
    display: flex;
    height: calc(100vh - 65px);
    background: url('./../../images/header_start_img.jpg') no-repeat bottom center / cover;
    position: relative;
`;


export const CTAMessage = styled.div`
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

export const CTAHeader = styled.h3`
    font-size: 1.7em;
    margin-bottom: 15px;
    &:last-of-type {
        &:after {
            margin-top: 20px;
            content: url('../../images/decoration.png');
            display: block;
            width: 100%;
        }
    }
`;

export const CTAButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const CTAButton = styled.button`
    outline: none;
    appearance: none;
    border: 1px solid #696969;
    padding: 15px;
    font-size: 1.3em;
    color: #1a2a3a;
    width: 175px;
    text-transform: uppercase;
`;
