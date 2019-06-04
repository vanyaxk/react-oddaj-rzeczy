import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandHoldingHeart, faDownload, faGlasses, faTruck} from '@fortawesome/free-solid-svg-icons';

const MainSection = styled.section`
    height: 100vh;
`;

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
`;

const MainStats = styled.section`
    background-color: #f9D132;
`;

const MainStat = styled.article`
    flex-grow: 1;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    color: #606060;
`;

const Stat = styled.h4`
    font-weight: 300;
    font-size: 3em;
    padding: 15px;
`;

const StatHeader = styled.h5`
    font-size: 1.5em;
    margin: 20px 0;
`;

const StatDesc = styled.p`
    font-size: 1em;
    padding: 15px;
`;


const MainGuides = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const GuidesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #EBEBEB;
`;

const GuidesHeader = styled.h4`
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

const MainGuide = styled.article`
    text-align: center;
    padding: 30px 20px;
`;

const NormalPar = styled.p`
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

const SmallPar = styled.p`
    font-size: .8em;
`;

const MainLink = styled(Link)`
    display: inline-block;
    text-align: center;
    margin: 20px auto 0;
    padding: 15px 30px;
    border: 1px solid #696969;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
`;



const Main = () => {
    let stats = {
        bags: 7,
        orgs: 5,
        cols: 10
    }

    return (
        <MainSection id='scrollToMain'>
            
            <MainStats>
            <Container>
                <MainStat>
                    <Stat>{stats.bags}</Stat>
                    <StatHeader>Oddanych worków</StatHeader>
                    <StatDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        In, eaque! 
                        Numquam repellat tempora voluptas optio!</StatDesc>
                </MainStat>
                <MainStat>
                    <Stat>{stats.orgs}</Stat>
                    <StatHeader>Wspartych organizacji</StatHeader>
                <StatDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque! 
                    Numquam repellat tempora voluptas optio!</StatDesc>
                </MainStat>
                <MainStat>
                    <Stat>{stats.cols}</Stat>
                    <StatHeader>Zorganizowanych zbiórek</StatHeader>
                    <StatDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque! 
                        Numquam repellat tempora voluptas optio!</StatDesc>
                </MainStat>
                </Container>
            </MainStats>

            <MainGuides>
                <GuidesHeader>Wystarczą 4 proste kroki</GuidesHeader>
                <GuidesContainer>
                <MainGuide>
                    <FontAwesomeIcon icon={faHandHoldingHeart} size='2x'/>
                    <NormalPar>Wybierz rzeczy</NormalPar>
                    <SmallPar>Ubrania, zabawki, sprzęt</SmallPar>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faDownload} size='2x'/>
                    <NormalPar>Spakuj je</NormalPar>
                    <SmallPar>Skorzystaj z worków</SmallPar>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faGlasses} size='2x'/>
                    <NormalPar>Komu chcesz pomóc?</NormalPar>
                    <SmallPar>Wybierz zaufane miejsce</SmallPar>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faTruck} size='2x'/>
                    <NormalPar>Zamów kuriera</NormalPar>
                    <SmallPar>Ustalicie z nim dogodny termin</SmallPar>
                </MainGuide>
                </GuidesContainer>
                <MainLink to='/register'>Załóz konto</MainLink>
            </MainGuides>
        </MainSection>
    )
}

export default Main;