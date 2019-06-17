import React, {Component} from 'react';
import { 
    MainFormContainer, 
    MainFormTag, 
    MainFormButtons, 
    PrevButton, 
    NextButton 
} from './MainFormStyles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

class MainForm extends Component {
    state = {
            formStep: 1
        }


    next = () => {
        let currentStep = this.state.formStep;

        currentStep = currentStep >= 3 ? 4: currentStep + 1;
        this.setState({
            formStep: currentStep
        })
        console.log(this.state.formStep);
    }

    prev = () => {
        let currentStep = this.state.formStep;

        currentStep = currentStep <= 1 ? 1: currentStep - 1;

        this.setState({
            formStep: currentStep
        })
    }

    get prevButton() {
        let currentStep = this.state.formStep;

        if (currentStep >= 2) {
            return <PrevButton onClick={this.prev}>Powrót</PrevButton>;
        }

        return null;
    }

    get nextButton() {
        let currentStep = this.state.formStep;

        if (currentStep <= 3) {
            return <NextButton onClick={this.next}>Dalej</NextButton>
        }

        return null;
    }

    
    render() {
        return (
            <MainFormContainer>
                <MainFormTag>
                    <h1>Krok {this.state.formStep}/4</h1>
                    <Step1 formStep={this.state.formStep}/>
                    <Step2 formStep={this.state.formStep}/>
                    <Step3 formStep={this.state.formStep}/>
                    <Step4 formStep={this.state.formStep}/>
                </MainFormTag>

                <MainFormButtons>
                    {this.prevButton}
                    {this.nextButton}
                </MainFormButtons>
            </MainFormContainer>
        )
    }
}

export default MainForm;