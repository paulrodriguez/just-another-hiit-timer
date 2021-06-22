import * as React from 'react';
import { WorkoutListItem } from './ListItem';
import {WorkoutEdit} from './Edit';
import {Button, Row, Col, Container, InputGroup, FormControl} from 'react-bootstrap';

import {
    NavLink,
    Route,
    Switch} from 'react-router-dom';

import {IWorkout} from '../../interfaces';

import {connect} from 'react-redux';


export class WorkoutList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let workoutItems = null;
    if(this.props.workouts) {
      workoutItems = this.props.workouts.map((item: IWorkout) =>
        <WorkoutListItem item={item} key={item.id} />
      );
    }

    return (
      <Container>
      <Row>
        <Col><h2>Workouts</h2></Col>
        <Col></Col>
        <Col><NavLink to={`workouts/new`}><Button variant="primary">+ New</Button></NavLink></Col>
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

const mapStateToProps = (state) => {
  return {workouts: state.workout.workouts};
};

export default connect(mapStateToProps)(WorkoutList);
