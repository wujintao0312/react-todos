import { connect } from 'react-redux'
import TodoFooter from 'components/TodoFooter'

import { tabAction, clearAction } from 'redux/action'

const mapStateToProps = (state) => {
  return {
    currentTab: state.tab,
    leftCount: state.todos.filter(item => !item.done).length,
    isShowFooter: state.todos.length > 0 ? true : false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchTab(status) {
      dispatch(tabAction(status))
    },
    dispatchClear() {
      dispatch(clearAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)