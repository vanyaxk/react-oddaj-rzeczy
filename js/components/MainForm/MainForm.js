import React, {Component} from 'react';
import { MainFormContainer } from './MainFormStyles';

class MainForm extends Component {
    render() {
        const h1style = {
            fontWeight: '700',
            letterSpacing: '20px'
        }
        return (
            <MainFormContainer>
                <h1 style={h1style}>Form in development</h1>
            </MainFormContainer>
        )
    }
}

export default MainForm;