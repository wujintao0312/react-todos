import { combineReducers } from 'redux'

import { TABTODO, CHECKEDTODO, CLEARTODO, DELETETODO, ADDTODO, TOGGLETODO, EDITTODO } from './action'

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
  switch(action.type) {
    case CHECKEDTODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    case CLEARTODO:
      return state.filter(item => !item.done)
    case DELETETODO:
      return state.filter(item => item.id !== action.id)
    case ADDTODO:
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          done: false
        }
      ]
    case TOGGLETODO:
      return state.map(item => {
        if (item.done !== action.value) {
          return {
            ...item,
            done: action.value
          }
        } else {
          return item
        }
      })
    case EDITTODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            name: action.name
          }
        } else {
          return item
        }
      })
    default:
      return state
  }
}

function tab(state = 'all', action) {
  if (action.type === TABTODO) {
    return action.status
  } else {
    return state
  }
  
}

function example(state = "hello world!", action) {
  return state
}

export default combineReducers({
  todos,
  tab,
  example,
})
