import * as React from 'react';

import {Button, Row, Col} from 'react-bootstrap';

export class WorkoutListItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.play = this.play.bind(this);
  }

  play() {
    console.log('playing workout');
  }

  delete() {
    
  }
  render() {
    return (
      <Row>
        <Col>{this.props.item.id}</Col>
        <Col>{this.props.item.name}</Col>
        <Col>
          <Button variant="primary" onClick={this.play}>Play</Button>
          <Button variant="primary">Delete</Button>
          <Button variant="primary">Edit</Button>
        </Col>
      </Row>
    )
  }
}
