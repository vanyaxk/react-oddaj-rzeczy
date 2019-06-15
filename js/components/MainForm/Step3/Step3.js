import React, {Component} from 'react';

class Step3 extends Component {
    render() {
        if (this.props.formStep !== 3) return null;
        return <h1>Step3</h1>;
    }
}

export default Step3;