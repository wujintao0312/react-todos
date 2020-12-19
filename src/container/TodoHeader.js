import { connect } from 'react-redux'
import TodoHeader from '../components/TodoHeader'

import { addAction } from '../redux/action'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAdd(value) {
      dispatch(addAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)