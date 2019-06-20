import React, {Component} from 'react';

import {
    FormStepFour,
    StepFourHeader,
    AddressHeader,
    AddressInputs,
    AddressLabel,
    DeadlineInputs,
    AddressInput,
    DeadlineHeader,
    DeadlineInput,
    DeadlineMessage,
    DeadlineLabel
} from './Step4Styles'

class Step4 extends Component {
    render() {
        if (this.props.formStep !== 4) return null;
        return (
            <>
            <StepFourHeader>Podaj adres oraz termin odbioru rzeczy przez kuriera</StepFourHeader>
            <FormStepFour>
                
                <AddressInputs>
                <AddressHeader>Adres odbioru</AddressHeader>
                    <AddressLabel>Ulica <AddressInput /></AddressLabel>
                    <AddressLabel>Miasto <AddressInput /></AddressLabel>
                    <AddressLabel>Kod Pocztowy <AddressInput /></AddressLabel>
                    <AddressLabel>Numer telefonu <AddressInput /></AddressLabel>
                </AddressInputs>

                
                <DeadlineInputs>    
                <DeadlineHeader>Termin odbioru</DeadlineHeader>
                    <DeadlineLabel>Data <DeadlineInput /></DeadlineLabel>
                    <DeadlineLabel>Godzina <DeadlineInput /></DeadlineLabel>
                    <DeadlineLabel>Uwagi dla kuriera <DeadlineMessage /></DeadlineLabel>
                </DeadlineInputs>
            </FormStepFour>
            </>
        )
    }
}

export default Step4;