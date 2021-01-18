import * as React from 'react';
import { WorkoutListItem } from './ListItem';
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
      {workoutItems}
      </>
    )
  }
}
