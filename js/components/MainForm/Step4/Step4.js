import React, {Component} from 'react';

import {
    FormStepFour
} from './Step4Styles'

class Step4 extends Component {
    render() {
        if (this.props.formStep !== 4) return null;
        return (
            <FormStepFour>
                <StepFourHeader>Podaj adres oraz termin odbioru rzeczy przez kuriera</StepFourHeader>
            </FormStepFour>
        )
    }
}

export default Step4;