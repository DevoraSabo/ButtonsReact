import React from 'react';

class NumberIncrementer extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0
        };
    }

    onButtonClick = () => {
        let num = this.state.num + 1;
        this.setState({num })
    }

    render() {
        return (
            <div className="well">
                <h1 id="number">{this.state.num}</h1>
                <button onClick={this.onButtonClick} className="btn btn-warning">Click to Increment</button>
            </div>
        );

    }
}

export default NumberIncrementer;