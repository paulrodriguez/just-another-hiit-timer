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
      modalIsOpen: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

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
        </div>
      <ExerciseModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
      </Container>
    );
  }
}
