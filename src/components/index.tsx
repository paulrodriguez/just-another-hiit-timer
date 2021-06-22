import * as React from "react";
import * as ReactDOM from "react-dom";

import '../styles/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Link,
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import {browserHistory} from 'react-router';

import WorkoutList from './Workout/List';
import WorkoutEdit from './Workout/Edit';

import { App } from "./App";
import { Guide } from './Guide';


import {getWorkouts} from '../actions/workout';

import { Provider } from 'react-redux';

import store from '../store';

store.dispatch(getWorkouts());

ReactDOM.render(
  <>
  <Provider store={store}>
    <Router>
      <App>
      <Switch>
        <Route exact path="/" component={WorkoutList} />
        <Route path="/user-guide" component={Guide} />
        <Route path="/workouts/new" render={props=>(<WorkoutEdit {...props} />)} />
        <Route path="/workouts/edit/:id" render={props=>(<WorkoutEdit {...props} />)} />
      </Switch>
      </App>
    </Router>
  </Provider>
  </>,
  document.getElementById("app")
);
