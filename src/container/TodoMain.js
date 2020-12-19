import { connect } from 'react-redux'
import TodoMain from '../components/TodoMain'

import { checkedAction, deleteAction, toggleAllAction, editAction } from '../redux/action'

const mapStateToProps = (state) => {
  // console.log(state)
  let todos = []
  if (state.tab === 'active') {
    todos = state.todos.filter(item => !item.done)
  } else if (state.tab === 'completed') {
    todos = state.todos.filter(item => item.done)
  } else {
    todos = state.todos
  }
  return {
    todos,
    toggleAll: state.todos.every(item => item.done)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChecked(id) {
      dispatch(checkedAction(id))
    },
    dispatchDelete(id) {
      dispatch(deleteAction(id))
    },
    dispatchToggleAll(value) {
      dispatch(toggleAllAction(value))
    },
    dispatchEdit(id ,name) {
      dispatch(editAction(id, name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain)