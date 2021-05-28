import * as React from 'react';
import { WorkoutListItem } from './ListItem';
import {WorkoutEdit} from './Edit';
import {Button, Row, Col, Container, InputGroup, FormControl} from 'react-bootstrap';
import {
    NavLink,
    HashRouter,
    Route,
    Switch} from 'react-router-dom';

import {IWorkout} from '../../interfaces/IWorkout';

import { Provider } from 'react-redux';

export class WorkoutList extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    let workoutItems = null;
    if(this.props.items) {
      workoutItems = this.props.items.map((item: IWorkout) =>
        <WorkoutListItem item={item} key={item.id} />
      );
    }

    return (
      <Container>
      <Row>
        <Col><h2>Workouts</h2></Col>
        <Col><NavLink to="/workout/new"><Button variant="primary">Add</Button></NavLink></Col>
      </Row>
      <div id="workouts">
      <Row>
      <Col>ID</Col>
      <Col>Name</Col>
      <Col>Actions</Col>
      </Row>
      {workoutItems}
      </div>
      </Container>
    )
  }
}
