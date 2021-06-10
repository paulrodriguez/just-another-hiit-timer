import {initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';


export default function(state: object = initialState, action: object) {

  switch (action.type) {
    case actionTypes.SAVE_WORKOUT:
      let idx = state.workouts.findIndex(workout=>workout.id==action.payload.id);

      if(idx === -1) {
        return {...state, workouts: [...state.workouts, action.payload]};
      } else {
        let workouts = [...state.workouts];
        workouts[idx] = action.payload;

        return {...state, workouts: workouts};
      }
      
      return {...state};
      break;
    case actionTypes.LOAD_WORKOUTS:
      return {workouts: action.payload};
    default:
      break;
  }

  return {...state};
};
