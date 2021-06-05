import * as React from 'react';

import { connect } from 'react-redux'

import { nanoid } from 'nanoid'

import {ExerciseModal} from './Exercise/ExerciseModal';

import {saveWorkout} from '../../actions/workout';

import { bindActionCreators } from "redux";

import { Workout } from '../../models/Workout';
import IWorkout from '../../interfaces/IWorkout';

import {Button, Row, Col, Container, InputGroup, FormControl} from 'react-bootstrap';

import { getWorkout } from '../../actions/workout';

export class WorkoutEdit extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      id: '',
      name: '',
      sort_order: 0,
      exercises: [],
      title: 'Create a new Workout',
      is_new: true,
      modalIsOpen: false,
      // specifies the exercise being edited
      exerciseEdit: {
        id: null,
        name: '',
        warmup: {
          minutes: 0,
          seconds: 0
        },
        work: {
          minutes:0,
          seconds: 0
        },
        cooldown: {
          minutes: 0,
          seconds: 0
        }
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getExercises = this.getExercises.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.renderSaveWorkoutButton = this.renderSaveWorkoutButton.bind(this);
  }

  saveExercise(exercise: any) {
    console.log(exercise);
    // add exercise to state if editing and then push, or have ir reload
  }

  handleChange(event: any) {
    const target = event.target;

    const value = target.value;
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    var $self = this;

    if('match' in this.props) {
      if('path' in this.props.match && this.props.match.path == '/workout/new') {
        this.setState({is_new: true});
        this.setState({id: nanoid()});
      }

      if('params' in this.props.match) {
        if('id' in this.props.match.params) {
          // TODO: fetch workout here
          let id = this.props.match.params.id
          let workout = this.props.workouts.find((el: IWorkout) => el.id=id);


          this.setState({
            id: workout.id,
            name: workout.name,
            exercises: workout.exercises,
            sort_order: workout.sort_order
          });
          
          this.setState({is_new: false});
        }
      }
    }
  }

  closeModal() {
    this.setState({modalIsOpen:false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  editExercise() {
    // sets the exercise to be edited here
  }

  getExercises() {
    return (<div></div>);

  }

  saveWorkout() {
    console.log(this.state);
    console.log(this.props);

    let data = {
      id: this.state.id,
      name: this.state.name,
      sort_order: this.state.sort_order
    };

    let workout = new Workout(this.state.id, this.state.name, this.state.sort_order);

    this.props.actions.saveWorkout(workout);

  }

  /**
   * get save workout button if its a new workout
   */
  renderSaveWorkoutButton() {
    return (<Button variant="success" onClick={this.saveWorkout}>Save</Button>);
  }

  render() {
    return (
      <Container>
      <Row>
      {this.state.id}
      <h1 className={'text-center'}>{this.state.title}</h1>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small"
          name="name"
            placeholder="Workout Name" value={this.state.name}
            onChange={this.handleChange}
            aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        </Col>
        <Col xs={6}>{this.renderSaveWorkoutButton()}</Col>
        </Row>
        <Row>
          <Col><h2>Exercises</h2></Col>
          <Col><Button onClick={this.openModal} variant="primary">+ Add</Button></Col>
        </Row>
        <div id="exercises">
        {this.getExercises()}
        </div>
      <ExerciseModal saveExercise={this.saveExercise}
        modalIsOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}
        exercise={this.state.exerciseEdit} />
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators({saveWorkout}, dispatch)
  };
}

const mapStateToProps = (state: any) => {
  return {workouts: state.workout.workouts};
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEdit);
