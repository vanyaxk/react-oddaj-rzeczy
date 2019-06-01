import React, { Component } from 'react';


class Foundations extends Component {
    state = {
        text: 'Foundations'
    }

    handleClickFunds = () => {
        this.setState({
            text: 'Foundations'
        })
    }

    handleClickOrgs = () => {
        this.setState({
            text: 'Orgs'
        });
    }

    handleClickLocals = () => {
        this.setState({
            text: 'Local Orgs'
        });
    }

    render() {
        return (
            <section className='foundations'>
                <h4>Komu pomagamy?</h4>
                <button className='active foundations-button' onClick={this.handleClickFunds}>Fundacjom</button>
                <button className='foundations-button' onClick={this.handleClickOrgs}>Organizacjom</button>
                <button className='foundations-button' onClick={this.handleClickLocals}>Lokalnym zbiórkom</button>
                <p>{this.state.text}</p>
            </section>
        )
    }
}

export default Foundations