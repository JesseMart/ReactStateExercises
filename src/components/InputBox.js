import React, { Component } from 'react'

class InputBox extends Component {
    render() {
        
        return (
            <>
                <input id="inputBox" type="text" value={this.props.text} onChange={this.props.input}/>       
            </>
        )
    }
}

export default InputBox