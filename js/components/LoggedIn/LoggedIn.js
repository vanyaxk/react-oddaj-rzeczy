import React, {Component} from 'react';
import {WelcomeLink, WelcomeSection} from './LoggedInStyles';

class LoggedIn extends Component {
    
    render() {
        return (
            <WelcomeSection>
                <WelcomeLink to='/' onClick={this.props.handleLogOut}>Witaj {this.props.name}</WelcomeLink>;
            </WelcomeSection>
        );
    }
};

export default LoggedIn;