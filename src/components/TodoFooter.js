import React, { Component } from 'react'

import classnames from 'classnames'

class TodoFooter extends Component {
  render() {
    // console.log(this.props)
    const {
      dispatchTab,
      currentTab,
      leftCount,
      dispatchClear,
      isShowFooter,
    } = this.props
    return (
      isShowFooter && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{leftCount}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a
                className={classnames({ selected: currentTab === 'all' })}
                href="#/"
                onClick={() => dispatchTab('all')}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={classnames({ selected: currentTab === 'active' })}
                href="#/active"
                onClick={() => dispatchTab('active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={classnames({ selected: currentTab === 'completed' })}
                href="#/completed"
                onClick={() => dispatchTab('completed')}
              >
                Completed
              </a>
            </li>
          </ul>
          <button className="clear-completed" onClick={() => dispatchClear()}>
            Clear completed
          </button>
        </footer>
      )
    )
  }
}

export default TodoFooter
