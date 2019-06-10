import styled from 'styled-components';

export const AboutUs = styled.section`
    display: flex;
    background-color: #EBEBEB;
    padding: 20px 0;
`;

export const AboutText = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #696969;
`;

export const AboutHeader = styled.h4`
    font-size: 2em;
    text-align: center;

    &:after {
        content: url('../../../images/decoration.png');
        display: block;
        width: 100%;
        transform: scale(.5);
    }
`;

export const AboutPar = styled.p`
    text-align: center;
    padding: 15px 35px;
`;

export const AboutImgContainer = styled.div`
    width: 50%;
`;

export const AboutImage = styled.img`
    max-width: 100%;
`;