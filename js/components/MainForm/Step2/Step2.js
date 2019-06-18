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
        if (this.props.formStep !== 2) return null;
        const {value, handleSelectChange, error} = this.props;
        console.log(error);
        return (
            <FormStepTwo>
            <Label>
            Liczba 60l worków: 
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