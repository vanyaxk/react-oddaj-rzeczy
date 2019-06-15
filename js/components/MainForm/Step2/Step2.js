import React, {Component} from 'react';

class Step2 extends Component {
    render() {
        if (this.props.form !== 2) return null;
        return <h1>Step2</h1>;
    }
}

export default Step2;