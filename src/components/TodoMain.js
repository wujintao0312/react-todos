import React, { Component } from 'react'

import classnames from 'classnames'

class TodoMain extends Component {
  state = {
    currentId: '',
    currentName: '',
  }
  handleToggleAll(value) {
    this.props.dispatchToggleAll(value)
  }
  handleEdit(e, id, name) {
    // console.log(e)
    if (e.keyCode === 13) {
      this.props.dispatchEdit(id, name)
      this.setState({
        currentId: '',
      })
    }
  }
  handleBlur(id, name) {
    this.props.dispatchEdit(id, name)
    this.setState({
      currentId: '',
    })
  }
  render() {
    // console.log(this.props)
    const { todos, dispatchChecked, dispatchDelete, toggleAll } = this.props
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={toggleAll}
          onChange={(e) => this.handleToggleAll(e.target.checked)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((item) => {
            return (
              <li
                className={classnames({
                  completed: item.done,
                  editing: this.state.currentId === item.id,
                })}
                key={item.id}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.done}
                    onChange={() => dispatchChecked(item.id)}
                  />
                  <label
                    onDoubleClick={() =>
                      this.setState({
                        currentId: item.id,
                        currentName: item.name,
                      })
                    }
                  >
                    {item.name}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => dispatchDelete(item.id)}
                  ></button>
                </div>
                <input
                  className="edit"
                  value={this.state.currentName}
                  onChange={(e) =>
                    this.setState({
                      currentName: e.target.value,
                    })
                  }
                  onBlur={() =>
                    this.handleBlur(item.id, this.state.currentName)
                  }
                  onKeyUp={(e) =>
                    this.handleEdit(e, item.id, this.state.currentName)
                  }
                />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default TodoMain
