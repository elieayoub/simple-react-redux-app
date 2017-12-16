let nextTodoId = 0;
let nextCounter = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const incrementCounter = counter => {
  return {
    type: 'INCREMENT_COUNTER',
  	value: nextCounter++
  }
}