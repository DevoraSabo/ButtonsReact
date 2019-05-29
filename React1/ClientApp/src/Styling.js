import React from 'react';

class Styling extends React.Component {
    render() {
        const myStyle = {
            width: 100,
            height: 100,
            marginTop: 40,
            backgroundColor: 'yellow'
        };
        return (
            <div style={myStyle}>
                Style goes here!
                </div>
            )
    };
}

export default Styling;