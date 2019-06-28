import React, {Component} from 'react';
import {
    FormStepTwo,
    Select,
    Option,
    Label,
    ErrorSpan
} from './Step2Styles';

class Step2 extends Component {
    

    render() {
        const {value, handleSelectChange, formStep, error} = this.props;
        if (formStep !== 2) return null;
        
        return (
            <FormStepTwo>
            <Label>
            <span>Liczba 60l worków:</span>
            <Select value={value} onChange={handleSelectChange}>
                <Option value={value} hidden>{value}</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
            </Select>
            </Label>
            {error && <ErrorSpan>{error}</ErrorSpan>}
            </FormStepTwo>
        )
    }
}

export default Step2;