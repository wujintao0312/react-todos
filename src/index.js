import React from 'react'
import ReactDOM from 'react-dom'

import './style/base.css'
import './style/index.css'

import App from './App'

import { createStore } from 'redux'
import reducer from './redux/reducer'

import { Provider } from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'))