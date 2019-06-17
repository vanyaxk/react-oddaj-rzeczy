import React, {Component} from 'react';
import {
    FormStepOne,
    Checkbox,
    CheckboxLabel,
    CheckboxName
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
    state = {

        checkedItems: new Map(),
        name: ''
    }

    handleCheck = (e) => {
        const item = e.target.name;
        const checked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, checked),
            name: item
        }))

        console.log(this.state.checkedItems);
    }

    render() {
        if (this.props.formStep !== 1) return null;
        
        return (
            <FormStepOne>
                {checkboxes.map(checkbox => (
                    <CheckboxLabel key={checkbox.key}>
                        
                        <Checkbox key={checkbox.key}
                                    name={checkbox.name}
                                    onChange={this.handleCheck}
                                    checked={this.state.checkedItems.get(checkbox.name) ? 
                                             this.state.checkedItems.get(checkbox.name) : 
                                             false}/>
                        <CheckboxName>{checkbox.name}</CheckboxName>
                    </CheckboxLabel>
                    )
                )}
            </FormStepOne>
        )
    }
}

export default Step1;