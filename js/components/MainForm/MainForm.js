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
            formStep: 1,
            error: '',
            checkedItems: new Map(),
            value: '- wybierz -',
            local: '- wybierz -'
        }


    next = () => {
        let currentStep = this.state.formStep;
        if (currentStep === 1) {
            this.handleValidateCheckboxes();
            }

        if (currentStep === 2) {
            this.handleValidateSelect();
        }
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

    handleCheckbox = (e) => {
        const item = e.target.name;
        const checked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, checked),
            name: item
        }));
    }

    handleSelectChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleLocalChange = (e) => {
        this.setState({
            local: e.target.value
        });
    }

    handleValidateSelect = () => {
        const {value} = this.state;
        if (value === '- wybierz -') {
            this.setState({
                formStep: 2,
                error: 'You didn\'t select any option'
            });
            console.log('it works');
        } else {
            this.setState({
                formStep: 3
            });
        }
    }

    handleValidateCheckboxes = () => {
        const {checkedItems} = this.state;
        if (checkedItems.size === 0) {
            this.setState({
                formStep: 1,
                error: 'You didn\'t check any checkboxes'
            });
            console.log(this.state.error);
        } else {
            this.setState({
                formStep: 2
            })
        }
    }

    
    render() {
        const {formStep, error, checkedItems, value, local} = this.state;
        return (
            <MainFormContainer>
                <MainFormTag>
                    <h1>Krok {formStep}/4</h1>
                    <Step1 formStep={formStep}
                           handleValidateCheckboxes={this.handleValidateCheckboxes}
                           error={error}
                           checkedItems={checkedItems}
                           handleCheckbox={this.handleCheckbox}
                           />
                    <Step2 formStep={formStep}
                            value={value}
                            handleSelectChange={this.handleSelectChange}
                            error={error}
                    />
                    <Step3 formStep={formStep}
                            local={local}
                            handleLocalChange={this.handleLocalChange}
                            error={error}/>
                    <Step4 formStep={formStep}/>
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