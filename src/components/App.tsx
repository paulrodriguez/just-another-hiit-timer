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
import { Header } from './Header';

import { Guide } from './Guide';
import { CountdownTimer } from 'countdown-timer';

const testItems = [{id:1, name:"Workout 1"},{id:2, name:"Workout 2"}];

export const App = () => (
  <>
  <HashRouter>
  <Header />
  <Switch>
    <Route exact path="/">
    <WorkoutList items={testItems} />
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
