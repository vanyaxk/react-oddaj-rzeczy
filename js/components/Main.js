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
`;

const GuidesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const GuidesHeader = styled.h4`
    margin-top: 20px;
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
`;



const Main = () => {
    let stats = {
        bags: 7,
        orgs: 5,
        cols: 10
    }

    return (
        <MainSection>
            
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
                    <FontAwesomeIcon icon={faHandHoldingHeart}/>
                    <p>Wybierz rzeczy</p>
                    <p className='smaller'>Ubrania, zabawki, sprzęt</p>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faDownload}/>
                    <p>Spakuj je</p>
                    <p className='smaller'>Skorzystaj z worków</p>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faGlasses}/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p className='smaller'>Wybierz zaufane miejsce</p>
                </MainGuide>
                <MainGuide>
                    <FontAwesomeIcon icon={faTruck}/>
                    <p>Zamów kuriera</p>
                    <p className='smaller'>Kurier przyjedzie w dogodnym terminie</p>
                </MainGuide>
                </GuidesContainer>
            </MainGuides>

            <Link to='/register'>Załóz konto</Link>
        </MainSection>
    )
}

export default Main;