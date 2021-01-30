import { createStore } from 'redux'
import WorkoutRepositoryFactory from './repositories/WorkoutRepositoryFactory';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
