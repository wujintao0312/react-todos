import React, { Component } from 'react'

import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </div>
    )
  }
}

export default App
