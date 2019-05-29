import React from 'react';

class AdderButton extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0,
            incrementer: 1,
            color: ""
        };
    }

    onButtonClick = () => {
        let num = this.state.num + this.state.incrementer;
        this.setState({ num })
    }

    onIncrementerClick = () => {
        let incrementer = this.state.incrementer + 1;
        this.setState({ incrementer })
    }

    onColorChangerClick = () => {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16).slice(-6);
        this.setState({ color })
    }

    render() {
        const randomColor = {
            color: this.state.color
        }
        return (
            <div className="well">
                <h1 id="number" style="{randomColor}">{this.state.num}</h1>
                <button onClick={this.onButtonClick} className="btn btn-warning">Click to Increment</button>
                <br />
                <h1 id="incrementer">{this.state.incrementer}</h1>
                <button onClick={this.onIncrementerClick} className="btn btn-danger">Incrementing by this number</button>
                <br />
                <button onClick={this.onColorChangerClick} className="btn btn-info">Random Color Changer</button>
            </div>
        );

    }

}

export default AdderButton;