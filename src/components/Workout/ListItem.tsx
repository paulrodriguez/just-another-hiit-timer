import * as React from 'react';

export class WorkoutListItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.item.name}
      </div>
    )
  }
}
