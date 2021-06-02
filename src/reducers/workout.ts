import {initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';


export default function(state: object = initialState, action: object) {
  switch (action.type) {
    case actionTypes.SAVE_WORKOUT:
      return state;
      break;
    case actionTypes.LOAD_WORKOUTS:
      return {workouts: action.payload};
    default:
      break;
  }

  return state;
};
