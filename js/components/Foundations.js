import React, { Component } from 'react';
import styled, { css } from 'styled-components';

        const FoundationHeader = styled.h4`
            font-size: 1.5em;
            margin-top: 20px;
            text-align: center;

            &:after {
                content: url('./../../images/decoration.png');
                display: block;
                width: 100%;
                transform: scale(.5);
            }
        `;
        const Container = styled.section`
            max-width: 1024px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        `;

        const Buttons = styled.div`
        margin: 0 auto;
        max-width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center
        `;
        const FoundationList = styled.ul`
            list-style: none;
        `;
        const FoundationPurpose = styled.p`
            max-width: 600px;
            padding: 20px;
            margin: 0 auto;
            text-align: center;
        `;

        const FoundationItem = styled.li`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        `;
        const FoundationInfo = styled.section`
            padding: 10px 20px;
            &:after {
                content: '';
                display: block;
                height: 1px;
                min-width: 400px;
                background-color: #a9a9a9;
                margin-top: 30px;
            }
        `;

        const FoundationName = styled.p`
            font-size: 1.1em;
        `;

        const FoundationMission = styled.p`
            margin-top: 20px;
            font-style: italic;
            font-size: .9em;
        `;

        const FoundationNeeds = styled.p`
            padding: 10px 20px;

            &:after {
                content: '';
                display: block;
                height: 1px;
                min-width: 400px;
                background-color: #a9a9a9;
                margin-top: 30px;
            }
        `;

        const PageList = styled.ul`
            list-style: none;
            display: flex;
            justify-content: center;
        `;

        const PageNumber = styled.li`
            padding: 10px;
            margin-bottom: 20px;
            cursor: pointer
        `;

        const foundations = [
            {
                id: 1,
                name: "Fundacja 'Dbam o zdrowie'",
                mission: "Pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, jedzenie, sprzet, AGD"
            },
            {
                id: 2,
                name: "Fundacja 'Dla dzieci'",
                mission: "Pomoc dzieciom",
                needs: "ubrania, jedzenie, sprzet, AGD"
            },
            {
                id: 3,
                name: "Fundacja 'Bez domu'",
                mission: "Pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, jedzenie, sprzet, AGD"
            },
            {
                id: 4,
                name: "Fundacja 'Zdrowie'",
                mission: "Pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, jedzenie, sprzet, AGD"
            }
        ];
    
        const organisations = [
            {
                id: 1,
                name: "Polska Akcja Humanitarna",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            },
    
            {
                id: 2,
                name: "Fundacja im. Stefana Batorego",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            },
    
            {
                id: 3,
                name: "Fundacja MSP Komandor",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            },
    
            {
                id: 4,
                name: "Fundacja 'Arka'",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            }
        ];

        const localOrgs = [
            {
                id: 1,
                name: "Fundacja 'Arka'",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            },
    
            {
                id: 2,
                name: "Polska Pomoc",
                mission: "Humanitarna pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubrania, sprzet, AGD, pieniądze"
            },
    
            {
                id: 3,
                name: "Fundacja 'Bez domu'",
                mission: "Pomoc ludziom w trudnej sytuacji zyciowej",
                needs: "ubranie, jedzenie, sprzet, AGD"
            },
    
            {
                id: 4,
                name: "Fundacja 'Super'",
                mission: "Pomoc wszystkim!",
                needs: "Wszystko!"
            },

            {
                id: 5,
                name: 'Polskie Centrum Pomocy',
                mission: "Pomóc Polakom",
                needs: "Cokolwiek"
            },

            {
                id: 6,
                name: 'Korpusy Pokoju',
                mission: 'Pomóc zdrowotna',
                needs: "Leki"
            },
            {
                id: 7,
                name: 'Caritas Polska',
                mission: 'Care and protection',
                needs: "ubrania, sprzęt, AGD"
            }
        ]


class Foundations extends Component {
    
    state = {
        text: foundations,
        elementsPerPage: 3,
        currentPage: 1,
        fundsClicked: true,
        orgsClicked: false,
        localsClicked: false
    }

    handleClickFunds = () => {
        this.setState({
            text: foundations,
            fundsClicked: true,
            orgsClicked: false,
            localsClicked: false
        })
    }

    handleClickOrgs = () => {
        this.setState({
            text: organisations,
            orgsClicked: true,
            fundsClicked: false,
            localsClicked: false
        });
    }

    handleClickLocals = () => {
        this.setState({
            text: localOrgs,
            localsClicked: true,
            fundsClicked: false,
            orgsClicked: false
        });
    }

    handlePageClick = () => {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {

        const Button = styled.button`
            background: white;
            outline: none;
            appearance: none;
            border: none;
            width: 150px;
            padding: 10px;
            margin: 0 10px;
            font-size: 1em;
            border: ${props => props.clicked ? '1px solid black' : 'none'};
            border-radius: 3px;
        `;

        const lastElement = this.state.currentPage * this.state.elementsPerPage;
        const firstElement = lastElement - this.state.elementsPerPage;
        const currentElements = this.state.text.slice(firstElement, lastElement);
        //displaying elements
        const renderElements = currentElements.map(el => {
            return (
                <FoundationItem key={el.name}>
                    <FoundationInfo>
                        <FoundationName>{el.name}</FoundationName>
                        <FoundationMission>{el.mission}</FoundationMission>
                    </FoundationInfo>
                    <FoundationNeeds>{el.needs}</FoundationNeeds>
                </FoundationItem>
            )
        });
        //displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.text.length / this.state.elementsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
        return (
            <PageNumber
            key={number}
            id={number}
            style={this.state.style}
            onClick={this.handlePageClick}
            >
            {number}
            </PageNumber>
        );
        });
        return (
            <section className='foundations' id='scrollToFoundations'>
                 <Container>
                    <FoundationHeader>Komu pomagamy?</FoundationHeader>
                    <Buttons>
                        <Button clicked={this.state.fundsClicked} onClick={this.handleClickFunds}>Fundacjom</Button>
                        <Button clicked={this.state.orgsClicked} onClick={this.handleClickOrgs}>Organizacjom</Button>
                        <Button clicked={this.state.localsClicked} onClick={this.handleClickLocals}>Lokalnym zbiórkom</Button>
                    </Buttons>
                    <FoundationPurpose>
                        W naszej bazie znijdziesz listę zweryfikowanych Fundacji, z którymi wspólpracujemy.
                        Mozesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </FoundationPurpose>
                    <FoundationList>
                        {renderElements}
                    </FoundationList>
                    <PageList>{renderPageNumbers}</PageList>
                    
                </Container>
            </section>
        )
    }
}

export default Foundations