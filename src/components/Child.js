import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt : 'this is a text value',
            num1 : 3,
            num2 : 4,
            increment : 0
        }
        //-----------------------------------------------
        //
        // THIS IS THE PROPER WAY TO UPDATE A "state" BUT THIS FORM ISNT USED ONLY EXAMPLE
        // setTimeout((params) => {
        //     this.setState({txt:"Hello World"})
        // }, 2000);
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        //-----------------------------------------------
    }

    handleUpdate = () => {
        console.log('Button was clicked')

        // this.setState({txt:'Hello World'})

        // this.setState({num1 : this.state.num1 + 1,
        //                 num2 : this.state.num2 + this.state.num1  })

        
    }
    addOne = () => {
        this.setState({increment : this.state.increment + 1})
    }
    

    minusOne = () => {
        this.setState({increment : this.state.increment - 1})
    }
    
    
    

    render() {
        return (
            <>
                { /*   YOU CANT DO THIS TO UPDATE YOUR STATE YOU HAVE TO USE A FUNCTION ----> this.state.num1 = 5
                {/* <h1>{this.props.txt}</h1>
                {3 * this.props.integer} */}
                <h1>{this.state.txt}</h1><br/>
                {/* {this.state.num1} + {this.state.num2}<br/> */}
                
                <h2>{this.state.increment}</h2>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.minusOne}>-</button>
            </>
        );
    }
}
//------------------------------------------------------------------//
///  THIS SPECIAL PROPERTY HELPS CATCH BUGS WHEN THE APP IS EXECUTED
/// THIS IS USEFULL SO THE APP WONT BREAK FOR THE USER  
// Child.propTypes = {
//     txt : PropTypes.string,
//     integer : PropTypes.number,
//     integer : PropTypes.number.isRequired                         
// };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
export default Child
