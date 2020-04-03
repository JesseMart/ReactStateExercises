import React from 'react';
import Addbutton from './AddButton'
import InputBox from './InputBox'
import Tags from './Tags'
import './styles.css'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : '',
            todoList : []
        }
        
    }
    
    //------METHOD RETRIEVING THE VALUE OF THE INPUT FIELD
    handleChange = (e) => {
        this.setState({
            items : e.target.value                                  
        })
    }
    //-------METHOD TO JOIN THE INPUT INTO THE EMPTY ARRAY & CLEAR THE INPUT BOX AFTERWARDS
    addedTodo = () => {
        this.setState({todoList : [...this.state.todoList, this.state.items]})
        this.setState({items: ''});
        
    }
    
    render() {
        //EASY WAY WITHOUT HAVING TO TYPE ALL THE THIS.STATE(VALUE)
        let {items, todoList} = this.state;
        
        let tags =  todoList.map((item, index)=>{
            return <li className="text" key={index}>{item}</li>
            })
        
        return (

            // <div >
            //     <input id="inputBox" type="text" value={items} onChange={this.handleChange}/>
            //     <button id="addButton" onClick={this.addedTodo}>Add</button>
            //     <ul>
            //         {
            //             //--------- LOOPING THROUGH THE ARRAY AND DISPLAYING ANYTHING INSIDE
            //         todoList.map((item, index)=>{
            //             return <li className="text" key={index}>{item}</li>
            //         })
            //         }
            //     </ul>
            // </div>
            <>
                <InputBox text={items} input={this.handleChange}  />
                <Addbutton add={this.addedTodo} />
                <Tags  array={tags} />
            </>
        );
    }
}




export default TodoList


