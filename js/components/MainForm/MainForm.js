import React, {Component} from 'react';
import { MainFormContainer, MainFormTag } from './MainFormStyles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

class MainForm extends Component {
    state = {
            formStep: 1
        }
    render() {
        const h1style = {
            fontWeight: '700',
            letterSpacing: '20px'
        }
        return (
            <MainFormContainer>
                <MainFormTag>
                    <h1 style={h1style}>Form in development</h1>
                    <Step1 formStep={this.state.formStep}/>
                    <Step2 formStep={this.state.formStep}/>
                    <Step3 formStep={this.state.formStep}/>
                    <Step4 formStep={this.state.formStep}/>
                </MainFormTag>
            </MainFormContainer>
        )
    }
}

export default MainForm;