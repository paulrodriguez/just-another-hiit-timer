import {initialState} from './initialState';
import * as actionTypes from '../actions/types';

import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';
let repository = WorkoutRepositoryFactory.create('local');

export default function(state: object = initialState, action: object) {
  switch (action.type) {
    case actionTypes.ADD_WORKOUT:
      // add new workout here or save existing one.
      // call repository for permament storage, then add to state
      console.log('calling the reducer');
      console.log(action);
      return state;
      break;
    default:
      break;
  }

  return state;
};
