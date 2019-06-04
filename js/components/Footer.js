import React from 'react';
import Contact from './Contact';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const PageFooter = styled.footer`
    background: url('./../../images/footer_bg_img.jpg') no-repeat bottom right / cover;
    background-attachment: fixed;
    height: 100vh;
`;

const Container = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
`;

const Copyright = styled.p`
    color: black;
    position: absolute;
    top: 95vh;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SocialMedia = styled.section`
    position: absolute;
    top: 95vh;
    right: 5%;
    transform: translate(-50%, -50%);

     &> * {
         cursor: pointer 

         &:last-of-type {
            margin-left: 10px;
        }
     }
`;

const Footer = () => {
    return (
        <PageFooter id="scrollToContact">
            <Container>

                <Contact />

                <Copyright>Copyright &copy; Ivan Kohut</Copyright>
                <SocialMedia>
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </SocialMedia>
            </Container>

            
        </PageFooter>
    )
}

export { Footer };