import { createStore } from 'redux'
import WorkoutRepositoryFactory from './repositories/WorkoutRepositoryFactory';
import reducers from './reducers';

const store = createStore(reducers);

export default store;
