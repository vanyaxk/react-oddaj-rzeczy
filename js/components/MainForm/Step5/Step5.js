import React, {Component} from 'react';

class Step5 extends Component {

    componentDidMount() {
        fetch('http://localhost:3003/foundations')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            console.log(data);
        })
    }


    render() {
        if (this.props.formStep !== 5) return null;
        return (
            <>
            <h1>Step5</h1>

            <input type='text' onChange={this.props.handleFindInput}/>
            </>
        );
    }
}

export default Step5;