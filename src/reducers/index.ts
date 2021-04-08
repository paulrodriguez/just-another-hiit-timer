import { combineReducers } from "redux";

import exercise from './exercise';
import workout from './workout';

const reducers = combineReducers({exercise});

export default reducers;
