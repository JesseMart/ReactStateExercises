
import React, { Component } from 'react'

class AddButton extends Component {

    render() {
        return (
            <>
                <button id="addButton" onClick={this.props.add}>Add</button>
            </>
        )
    }
}

export default AddButton