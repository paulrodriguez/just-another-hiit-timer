import {initialState} from './initialState';

import * as actionTypes from '../actions/actionTypes';

export default function(state: object = initialState, action: object) {
  switch (action.type) {
    case actionTypes.SAVE_EXERCISE:
      console.log(state);
      break;

    default:
      break;
  }
  return state;
};
