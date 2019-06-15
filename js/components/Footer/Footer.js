import React from 'react';
import Contact from '../Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

import {
    PageFooter,
    Container,
    Copyright,
    SocialMedia
} from './FooterStyles';

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