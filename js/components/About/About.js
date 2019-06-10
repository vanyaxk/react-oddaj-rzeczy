import React from 'react';


import {
    AboutUs,
    AboutText,
    AboutHeader,
    AboutPar,
    AboutImgContainer,
    AboutImage
} from './AboutStyles';


const About = () => (
    <AboutUs id="scrollToAbout">
        <AboutText>
            <AboutHeader>O nas</AboutHeader>
            <AboutPar>Morbi id lacus elit. 
                Cras vestibulum volutpat enim, vel lacinia ipsum ultrices in. 
                Phasellus sed enim hendrerit, ultricies tortor quis, sodales felis. Phasellus a malesuada mi. Aliquam erat volutpat. Vestibulum ac lacinia dolor. 
                Praesent non ullamcorper leo.</AboutPar>
        </AboutText>
        <AboutImgContainer>
            <AboutImage src='./../../../images/about.jpg' />
        </AboutImgContainer>
    </AboutUs>
);

export default About;