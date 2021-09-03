import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

function Todo() {
    return (
        <div className="todo">
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default Todo
