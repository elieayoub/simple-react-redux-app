import React from 'react'
import TodoFilter from '../components/TodoFilter'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../components/VisibleTodoList'

const TodoExample = () => (
  <div>
  	<h1>React Redux TOdo Example</h1>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilter />
  </div>
)

export default TodoExample