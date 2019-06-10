import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandHoldingHeart, faDownload, faGlasses, faTruck} from '@fortawesome/free-solid-svg-icons';

import {
    MainSection,
    Container,
    MainStats,
    MainStat,
    Stat,
    StatHeader,
    StatDesc,
    MainGuides,
    GuidesContainer,
    GuidesHeader,
    MainGuide,
    NormalPar,
    SmallPar,
    MainLink

} from './MainStyles.js'



class Main extends Component {
    state = {
        bags: 7,
        orgs: 5,
        cols: 10
    }

    render() {
        return (
            <MainSection id='scrollToMain'>
                
                <MainStats>
                <Container>
                    <MainStat>
                        <Stat>{this.state.bags}</Stat>
                        <StatHeader>Oddanych worków</StatHeader>
                        <StatDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            In, eaque! 
                            Numquam repellat tempora voluptas optio!</StatDesc>
                    </MainStat>
                    <MainStat>
                        <Stat>{this.state.orgs}</Stat>
                        <StatHeader>Wspartych organizacji</StatHeader>
                    <StatDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque! 
                        Numquam repellat tempora voluptas optio!</StatDesc>
                    </MainStat>
                    <MainStat>
                        <Stat>{this.state.cols}</Stat>
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
}

export default Main;