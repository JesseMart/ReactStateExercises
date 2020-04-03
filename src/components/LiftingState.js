//PARENT TO H1 H2 H3
import React, { Component } from 'react';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';

class LiftingState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicks: 0
        }

    }

    reset = () => {

        this.setState({
            clicks: 0
        })
    }

    updateClickCount = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }


    render() {
        return (
            <>
                <H1 clicks={this.state.clicks} />
                <br /> <br />
                <H2 reset={this.reset} />

                <H3 increment={this.updateClickCount} />
            </>
        )
    }
}

export default LiftingState
