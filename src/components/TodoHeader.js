import React, { Component } from 'react'

class TodoHeader extends Component {
  state = {
    taskName: '',
  }
  handleAdd(e, value) {
    // console.log(e)
    if (e.keyCode === 13) {
      this.props.dispatchAdd(value)
      this.setState({
        taskName: '',
      })
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.taskName}
          onChange={(e) =>
            this.setState({
              taskName: e.target.value,
            })
          }
          onKeyUp={(e) => this.handleAdd(e, this.state.taskName)}
        />
      </header>
    )
  }
}

export default TodoHeader
