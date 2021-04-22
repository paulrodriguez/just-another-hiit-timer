import {initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';


export default function(state: object = initialState, action: object) {
  switch (action.type) {
    case actionTypes.SAVE_WORKOUT:
      console.log('calling the reducer');
      console.log(action.payload);
      return state;
      break;
    default:
      break;
  }

  return state;
};
