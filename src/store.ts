import { createStore } from 'redux'
import WorkoutRepositoryFactory from './repositories/WorkoutRepositoryFactory';
import {reducers} from './reducers';

export default createStore(reducers);
