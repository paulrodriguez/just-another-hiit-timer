import * as React from 'react';

import {Button, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

export class WorkoutListItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.play = this.play.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * starts a workout
   */
  play() {
    console.log('playing workout');
  }

  /**
   * delete workout after confirmation
   */
  delete() {

  }
  render() {
    return (
      <Row>
        <Col>{this.props.item.id}</Col>
        <Col>{this.props.item.name}</Col>
        <Col>
          <Button variant="primary" onClick={this.play}>Play</Button>
          <Button variant="primary" onClick={this.delete}>Delete</Button>
          <NavLink to="/workout/edit/{this.props.item.id}"><Button variant="primary">Edit</Button></NavLink>
        </Col>
      </Row>
    )
  }
}
