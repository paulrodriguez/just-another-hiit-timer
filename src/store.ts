import { createStore, applyMiddleware } from 'redux'
import WorkoutRepositoryFactory from './repositories/WorkoutRepositoryFactory';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
