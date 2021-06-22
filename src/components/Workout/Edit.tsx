import * as React from 'react';

import { connect } from 'react-redux'

import { nanoid } from 'nanoid'

import {ExerciseModal} from './Exercise/ExerciseModal';

import {saveWorkout} from '../../actions/workout';

import {saveExercise} from '../../actions/exercise';


import { bindActionCreators } from "redux";

import { Workout } from '../../models/Workout';
import {IWorkout, WorkoutData, ExerciseData} from '../../interfaces';
import {JsonWorkoutBuilder} from '../../builders';

import {Button, Row, Col, Container, InputGroup, FormControl, } from 'react-bootstrap';

import Toast from 'react-bootstrap/Toast'

import { getWorkout } from '../../actions/workout';

interface IState extends WorkoutData {
  show: boolean,
  title: string,
  is_new: boolean,
  modalIsOpen: boolean,
  exerciseEdit: ExerciseData

}

const TOAST_SHOW = true;
const TOAST_HIDE = false;
const TOAST_DELAY = 5000;

export class WorkoutEdit extends React.Component<any, IState> {
  workoutBuilder: JsonWorkoutBuilder;

  constructor(props: any) {
    super(props)

    this.state = {
      show: false,
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
        workout_id: '',
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

    this.workoutBuilder = new JsonWorkoutBuilder();

    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getExercises = this.getExercises.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.renderSaveWorkoutButton = this.renderSaveWorkoutButton.bind(this);
    this.toastShow = this.toastShow.bind(this);
  }

  /**
   * appends exercise to list of exercises
   *
   * @param {ExerciseData} exercise: the exercise data to save
   * @param {Boolean} isNew: specifies wether the exercise is new (append it).
   * @param {Number} index: specifies the position of exercise if editing existing one.
   */
  saveExercise(exercise: ExerciseData, isNew: boolean=true, index: number=-1) {
    // add exercise to state if editing and then push, or have ir reload
    if (isNew) {
      this.setState({exercises: [...this.state.exercises, exercise]});
    } else {
      // TODO handle case when editing existing exercise
    }
    this.closeModal();
  }

  /**
   * handle change when changing an input
   */
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
            sort_order: workout.sort_order,
            title: 'Edit Workout'
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

  /**
   * triggers modal opening to edit exercise
   */
  editExercise(exercise: ExerciseData) {
    // sets the exercise to be edited here
  }

  /**
   * get exercises in JSX to display
   */
  getExercises() {
    let exercises = this.state.exercises.map(item=>{
      return (<Row>
        <Col>{item.name}</Col>
        <Col>Edit</Col>
      </Row>);
    });
    return exercises;

  }

  saveWorkout() {
    let data = {
      id: this.state.id,
      name: this.state.name,
      sort_order: this.state.sort_order
    };

    let self = this;

    let workout = new Workout(this.state.id, this.state.name, this.state.sort_order);

    let promise = this.props.actions.saveWorkout(workout);
    promise.then(workout=>{
      self.toastShow(TOAST_SHOW);
    });
  }

  toastShow(show: boolean) {
    this.setState({show: show});
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
      <h1 className={'text-center '}>{this.state.title}</h1>
      </Row>
      <Row>
      <Col xs={12}>
        <Toast onClose={()=>this.toastShow(TOAST_HIDE)} show={this.state.show} delay={TOAST_DELAY} autohide>
          <Toast.Body>Workout Saved.</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6} md={12}>{this.renderSaveWorkoutButton()}</Col>
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
    actions: bindActionCreators({saveWorkout, }, dispatch)
  };
}

const mapStateToProps = (state: any) => {
  return {workouts: state.workout.workouts};
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEdit);
