import React, { Component } from 'react'

class H2 extends Component {

    render() {
        return (
            <>
                <button onClick={this.props.reset}>Reset</button>
            </>
        )
    }
}

export default H2

