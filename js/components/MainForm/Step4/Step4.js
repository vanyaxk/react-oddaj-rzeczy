import React, {Component} from 'react';

class Step4 extends Component {
    render() {
        if (this.props.formStep !== 4) return null;
        return <h1>Step4</h1>
    }
}

export default Step4;