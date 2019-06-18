import React, {Component} from 'react';
import {
    FormStepOne,
    Checkbox,
    CheckboxLabel,
    CheckboxName,
    ErrorSpan
} from './Step1Styles';

const checkboxes = [
    {
        name: 'ubrania, które nadają się do ponownego uzycia',
        key: 'ubrania'
    },
    {
        name: 'ubrania do wyrzucenia',
        key: 'ubrania2'
    },
    {
        name: 'zabawki',
        key: 'zabawki'
    },
    {
        name: 'ksiązki',
        key: 'ksiązki'
    },
    {
        name: 'inne',
        key: 'inne'
    }
]

class Step1 extends Component {

    render() {
        if (this.props.formStep !== 1) return null;
        return (
            <FormStepOne>
                {checkboxes.map(checkbox => (
                    <CheckboxLabel key={checkbox.key}>
                        
                        <Checkbox key={checkbox.key}
                                    name={checkbox.name}
                                    onChange={this.props.handleCheckbox}
                                    checked={this.props.checkedItems.get(checkbox.name) ? 
                                             this.props.checkedItems.get(checkbox.name) : 
                                             false}/>
                        <CheckboxName>{checkbox.name}</CheckboxName>
                        
                    </CheckboxLabel>
                    )
                )}
                {this.props.error && <ErrorSpan>{this.props.error}</ErrorSpan>}
            </FormStepOne>
        )
    }
}

export default Step1;