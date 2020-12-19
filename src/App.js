import React, { Component } from 'react'

import TodoHeader from 'container/TodoHeader'
import TodoMain from 'container/TodoMain'
import TodoFooter from 'container/TodoFooter'

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
