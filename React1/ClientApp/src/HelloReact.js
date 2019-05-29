import React from 'react';
import Styling from './Styling'

class HelloReact extends React.Component {
    render() {
        return (
            <div>
            <h1>Check out { this.props.name }'s style:</h1>
                <Styling />
             </div>
            );
    }
}

export default HelloReact;