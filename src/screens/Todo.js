import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

function Todo() {
    return (
      <div className="todo">
        <h3
          style={{
            textAlign: "center",
            width: "100%",
            marginBottom: "14px",
            borderBottom: "2px solid rgb(228 220 220)",
          }}
        >
          Todo List
        </h3>
        <AddTodo />
        <TodoList />
      </div>
    );
}

export default Todo
