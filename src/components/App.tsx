import * as React from 'react';
import {
  Link,
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import {WorkoutList} from './Workout/List';
import WorkoutEdit from './Workout/Edit';
import { Header } from './Header';

import { Guide } from './Guide';
import { CountdownTimer } from 'countdown-timer';

import { Provider } from 'react-redux'

import store from '../store';

const testItems = [{id:1, name:"Workout 1"},{id:2, name:"Workout 2"}];

export const App = () => (
  <>
  <Provider store={store}>
    <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/">
      <WorkoutList items={testItems} />
      </Route>
      <Route path="/user-guide" component={Guide} />
      <Route path="/workout/new" render={props=>(<WorkoutEdit {...props} />)} />
    </Switch>
    </HashRouter>
  </Provider>
  </>
);
