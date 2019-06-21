import React from 'react';

import {
    StuffSection,
    Container,
    StuffHeader,
    StuffHint,
    StuffList,
    StuffElement,
    StuffBoldMessage,
    StuffMessage,
    StepNumber,
    StepDesc
} from './StuffStyles';


const Stuff = () => {
    const stepElements = [
        'Wybierz rzeczy',
        'Spakuj je w worki',
        'Wybierz fundację',
        'Zamów kuriera'
    ];
    return (
        <StuffSection>
            <Container>
                <StuffHeader>Oddaj Rzeczy, ktorych nie potrzebyjesz, potzerbującym</StuffHeader>
                <StuffHint>Wystarczą cztery proste kroki:</StuffHint>
                <StuffList>
                    {stepElements.map((element, index) => {
                        return <StuffElement key={index}>
                            <StepNumber>{index + 1}</StepNumber>
                            <StepDesc>{element}</StepDesc>
                        </StuffElement>   
                    })}
                </StuffList>
            </Container>
        </StuffSection>
    )
}

export default Stuff;