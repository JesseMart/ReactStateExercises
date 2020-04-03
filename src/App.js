import React, { Component } from 'react'
import Child from './components/Child.js'
import News from './components/News'
import TodoList from './components/TodoList'
import {Container, Col, Row} from 'react-bootstrap'
import './components/styles.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoList />
      </div>

    )
  }
}

export default App

