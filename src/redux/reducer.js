import { combineReducers } from 'redux'

const taskList = [
  {
    id: 1,
    name: '早起',
    done: true
  },
  {
    id: 2,
    name: '学习redux',
    done: true
  },
  {
    id: 3,
    name: '享受午后阳光',
    done: false
  }
]

function todos(state = taskList, action) {
  return state
}

function example(state = "hello world!", action) {
  return state
}

export default combineReducers({
  todos,
  example,
})
