import {initialState} from './initialState';

export default function(state: object = initialState, action: object) {
  console.log(action);
  return state;
};
