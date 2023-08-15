import React from 'react'

function Todo() {
  return (
    <div className="todo">
        <button className="complete-btn">
            <i className="fas fa-check-circle"></i>
        </button>
        <li className="todo-item">asdasd</li>
        <button className="trash-btn">
            <i className="fa fa-minus-circle"></i>
        </button>
    </div>
  )
}

export default Todo