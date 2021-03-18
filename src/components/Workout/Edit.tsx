import * as React from 'react';

import { connect } from 'react-redux'

import {ExerciseModal} from './Exercise/ExerciseModal';

import {Button, Row, Col, Container, InputGroup, FormControl} from 'react-bootstrap';


export class WorkoutEdit extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
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
    if('match' in this.props) {
      if('path' in this.props.match && this.props.match.path == '/workout/new') {
        // TODO: create new workout here
      }
      if('params' in this.props.match) {
        if('id' in this.props.match.params) {
          // TODO: fetch workout here
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
  render() {
    return (
      <Container>
      <Row>
      <h1 className={'text-center'}>{this.state.title}</h1>
      </Row>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" name="name" placeholder="Workout Name" value={this.state.name} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col><h2>Exercises</h2></Col>
          <Col><Button onClick={this.openModal} variant="primary">+ Add</Button></Col>
        </Row>
        <div id="exercises">
        {this.getExercises()}
        </div>
      <ExerciseModal saveExercise={this.saveExercise} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} exercise={this.state.exerciseEdit} />
      </Container>
    );
  }
}
