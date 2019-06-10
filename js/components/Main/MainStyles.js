import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainSection = styled.section`
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
`;

export const MainStats = styled.section`
    background-color: #f9D132;
`;

export const MainStat = styled.article`
    flex-grow: 1;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    color: #606060;
`;

export const Stat = styled.h4`
    font-weight: 300;
    font-size: 3em;
    padding: 15px;
`;

export const StatHeader = styled.h5`
    font-size: 1.5em;
    margin: 20px 0;
`;

export const StatDesc = styled.p`
    font-size: 1em;
    padding: 15px;
`;


export const MainGuides = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const GuidesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #EBEBEB;
`;

export const GuidesHeader = styled.h4`
    margin-top: 40px;
    font-size: 1.5em;
    text-align: center;

    &:after {
        content: url('./../../images/decoration.png');
        display: block;
        margin-top: 10px;
        width: 100%;
    }
`;

export const MainGuide = styled.article`
    text-align: center;
    padding: 30px 20px;
`;

export const NormalPar = styled.p`
    font-size: 1em;
    margin-top: 20px;

    &:after {
        content: '';
        display: block;
        height: 2px;
        width: 50%;
        margin: 20px auto;
        background-color: #696969;
    }
`;

export const SmallPar = styled.p`
    font-size: .8em;
`;

export const MainLink = styled(Link)`
    display: inline-block;
    text-align: center;
    margin: 20px auto 0;
    padding: 15px 30px;
    border: 1px solid #696969;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
`;
