import React, { Component } from 'react'

class Tags extends Component {
    render() {
        
        return (
            <ul>
                {this.props.array}
            </ul>
        )
    }
}

export default Tags