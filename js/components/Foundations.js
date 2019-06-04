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
        const Button = styled.button`
            background: white;
            outline: none;
            appearance: none;
            border: none;
            width: 150px;
            padding: 10px;
            margin: 0 10px;
            font-size: 1em;
            
            ${props => props.active && css`
            border: 1px solid black;
            border-radius: 3px;
            `}
        `;

        const Buttons = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center
        `;


class Foundations extends Component {
    state = {
        text: 'Foundations'
    }

    handleClickFunds = () => {
        this.setState({
            text: 'Foundations',
        })
    }

    handleClickOrgs = () => {
        this.setState({
            text: 'Orgs',
        });
    }

    handleClickLocals = () => {
        this.setState({
            text: 'Local Orgs'
        });
    }

    render() {
        return (
            <section className='foundations' id='scrollToFoundations'>
                 <Container>
                    <FoundationHeader>Komu pomagamy?</FoundationHeader>
                    <Buttons>
                        <Button onClick={this.handleClickFunds}>Fundacjom</Button>
                        <Button onClick={this.handleClickOrgs}>Organizacjom</Button>
                        <Button active onClick={this.handleClickLocals}>Lokalnym zbiórkom</Button>
                    </Buttons>
                    <p>{this.state.text}</p>
                    
                </Container>
            </section>
        )
    }
}

export default Foundations