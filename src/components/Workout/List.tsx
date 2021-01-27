import * as React from 'react';
import { WorkoutListItem } from './ListItem';
import {WorkoutEdit} from './Edit';
import {
    NavLink,
    HashRouter,
    Route,
    Switch} from 'react-router-dom';

export class WorkoutList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    const workoutItems = this.props.items.map((item: any) =>
    <WorkoutListItem item={item} key={item.id} />
  );
    return (
      <>
      <NavLink to="/workout/new">Add</NavLink>
      <HashRouter>
        <Switch>
          <Route path="/new" render={props=>(<WorkoutEdit {...props} />)} />
        </Switch>
      </HashRouter>
      </>
    )
  }
}
