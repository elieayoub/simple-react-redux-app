import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  counter,
  visibilityFilter
})