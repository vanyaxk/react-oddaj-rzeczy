import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
    WelcomeButton,
    WelcomeSection,
    WelcomeSettings,
    WelcomeSetting
} from './LoggedInStyles';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleDropdownToggle = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    handleClick = () => {
        this.props.handleLogOut();
        this.props.history.push('/');
    }

    render() {
        const options = 
        <WelcomeSettings>
            <WelcomeSetting>Profil</WelcomeSetting>
            <WelcomeSetting>Ustawienia</WelcomeSetting>
            <WelcomeSetting>Moje zbiórki</WelcomeSetting>
            <WelcomeSetting onClick={this.handleClick}>Wyloguj</WelcomeSetting>
        </WelcomeSettings>;
        return (
            <WelcomeSection>
                <WelcomeButton onClick={this.handleDropdownToggle}>Witaj {this.props.name}<FontAwesomeIcon icon={faCog}/></WelcomeButton>
               {this.state.clicked ? options: null}
            </WelcomeSection>
        );
    }
};

export default withRouter(LoggedIn);