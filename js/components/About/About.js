import React from 'react';
import styled from 'styled-components';

const AboutUs = styled.section`
    display: flex;
    background-color: #EBEBEB;
    padding: 20px 0;
`;

const AboutText = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #696969;
`;

const AboutHeader = styled.h4`
    font-size: 2em;
    text-align: center;

    &:after {
        content: url('../../../images/decoration.png');
        display: block;
        width: 100%;
        transform: scale(.5);
    }
`;

const AboutPar = styled.p`
    text-align: center;
    padding: 15px 35px;
`;

const AboutImgContainer = styled.div`
    width: 50%;
`;

const AboutImage = styled.img`
    max-width: 100%;
`;

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