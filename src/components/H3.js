import React, { Component } from 'react'

class H3 extends Component {
    render() {
        return (
            <>

                <button onClick={this.props.increment}>Increment</button>
            </>
        )
    }
}

export default H3