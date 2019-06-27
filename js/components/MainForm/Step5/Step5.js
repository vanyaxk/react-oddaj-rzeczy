import React, {Component} from 'react';

class Step5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundations: []
        }
    }

    displayFoundations = (foundations) => {
        const foundationsArray = this.state.foundations.slice();
        foundationsArray.push(...foundations);
        foundationsArray.map(element => {
            return element === this.props.findInput;
        })
        this.setState({
            foundations: foundationsArray
        })

        console.log(this.state.foundations);
    }

    componentDidMount() {
        fetch('http://localhost:3003/foundations')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            this.displayFoundations(data);
        });
    }


    render() {
        const { foundations } = this.state;

        if (this.props.formStep !== 5) return null;
        console.log(this.props);
        return (
            
            <section>
                <ul>
                    {foundations.map(element => {
                      return <li key={element.id}>{element.name}</li>;
                    })}
                </ul>
                
            </section>
        );
    }
}

export default Step5;