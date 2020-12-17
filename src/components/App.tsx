import * as React from 'react';
import {
  Link,
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import WorkoutList from './WorkoutList';

import { Guide } from './Guide';


export const App = () => (
  <>
  <h1>Just Another HIIT Timer</h1>
  <HashRouter>
  <nav>
    <ul className={"menu"}>
      <li className={"item"}><NavLink to="/user-guide">Guide</NavLink></li>
      <li className={"item"}><NavLink to="/">Workouts</NavLink></li>
    </ul>
  </nav>
  <Switch>
    <Route exact path="/">
    <WorkoutList />
    </Route>
    <Route path="/user-guide">
    <Guide />
    </Route>
    <Route path="/workout/new">
    </Route>
    <Route path="/workout/edit/:id">
    </Route>
  </Switch>
  </HashRouter>
  </>
);
