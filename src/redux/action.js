const TABTODO = "TABTODO"
const CHECKEDTODO = "CHECKEDTODO"
const CLEARTODO = "CLEARTODO"
const DELETETODO = "DELETETODO"
const ADDTODO = "ADDTODO"
const TOGGLETODO = "TOGGLETODO"
const EDITTODO = "EDITTODO"

function tabAction(status) {
  return {
    type: TABTODO,
    status,
  }
}

function checkedAction(id) {
  return {
    type: CHECKEDTODO,
    id,
  }
}

function clearAction() {
  return {
    type: CLEARTODO
  }
}

function deleteAction(id) {
  return {
    type: DELETETODO,
    id,
  }
}

function addAction(value) {
  return {
    type: ADDTODO,
    name: value
  }
}

function toggleAllAction(value) {
  return {
    type: TOGGLETODO,
    value,
  }
}

function editAction(id, name) {
  return {
    type: EDITTODO,
    id,
    name,
  }
}

export { TABTODO, tabAction, CHECKEDTODO, checkedAction, CLEARTODO, clearAction, DELETETODO, deleteAction, ADDTODO, addAction, TOGGLETODO, toggleAllAction, EDITTODO, editAction }