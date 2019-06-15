import React, {Component} from 'react';

class Step1 extends Component {
    render() {
        if (this.props.formStep !== 1) return null;
        return <h1>Step1</h1>;
    }
}

export default Step1;