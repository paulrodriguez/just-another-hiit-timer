import * as React from 'react';
import * as Modal from 'react-modal';
import {InputGroup,FormControl, Button,Container,Row,Col, Form} from 'react-bootstrap';

import {Minutes} from '../../Time/Minutes';
import {Seconds} from '../../Time/Seconds';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class ExerciseModal extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.exercise.name || '',
      warmup_minutes:this.props.exercise.warmup_minutes || 0,
      warmup_seconds: this.props.exercise.warmup_seconds || 0,
      work_minutes: this.props.exercise.work_minutes || 0,
      work_seconds: this.props.exercise.work_seconds || 0,
      cooldown_minutes: this.props.exercise.cooldown.minutes || 0,
      cooldown_seconds: this.props.exercise.cooldown.minutes || 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  saveExercise() {
    let data = {
      name: this.state.name,
      workout_id: '',
      warmup: {
        minutes: this.state.warmup_minutes,
        seconds: this.state.warmup_seconds
      },
      work: {
        minutes: this.state.work_minutes,
        seconds: this.state.work_seconds
      },
      cooldown: {
        minutes: this.state.cooldown_minutes,
        seconds: this.state.cooldown_seconds
      }
    };

    this.props.saveExercise(data);
  }

  handleChange(event: any) {
    const target = event.target;

    const value = target.value;
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <Modal
      isOpen={this.props.modalIsOpen}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="Exercise Modal"
      ariaHideApp={false}
    >
      <Container>
        <Row>
        <Col xs="8"><h2>{this.props.name || 'Add Exercise'}</h2></Col>
        <Col xs={'auto'}>  <Button variant="outline-dark" onClick={this.props.closeModal}>Close</Button></Col>
        </Row>
        <Row>
          <Col xs="12">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" name="name"
                value={this.state.name} onChange={this.handleChange}
                aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
          </Col>
          <Col xs="4">
          Minutes
          </Col>
          <Col xs="4">
          Seconds
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Warmp Up</InputGroup.Text>
            </InputGroup.Prepend>
          </Col>
          <Col xs="4">
            <Minutes label="Warmup Minutes" value={this.state.warmup_minutes}
              placeholder="Minutes" name="warmup_minutes"
              onChange={this.handleChange} />
          </Col>
          <Col xs="4">
            <Seconds label="Warmup Seconds" value={this.state.warmup_seconds}
              placeholder="Minutes" name="warmup_seconds"
              onChange={this.handleChange} />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Work</InputGroup.Text>
            </InputGroup.Prepend>
          </Col>
          <Col xs="4">
          <Minutes label="Work Minutes" value={this.state.work_minutes}
            placeholder="Minutes" name="work_minutes"
            onChange={this.handleChange} />
          </Col>
          <Col xs="4">
            <Seconds label="Work Seconds" value={this.state.work_seconds}
              placeholder="Minutes" name="work_seconds"
              onChange={this.handleChange} />
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Cooldown</InputGroup.Text>
            </InputGroup.Prepend>
          </Col>
          <Col xs="4">
            <Minutes label="Cooldown Minutes" value={this.state.cooldown_minutes}
              placeholder="Minutes" name="cooldown_minutes"
              onChange={this.handleChange} />
          </Col>
          <Col xs="4">
          <Seconds label="Cooldown Seconds" value={this.state.cooldown_seconds}
            placeholder="Minutes" name="cooldown_seconds"
            onChange={this.handleChange} />
          </Col>
        </Row>
        <Button variant="success" onClick={this.saveExercise}>Add</Button>
        </Container>
    </Modal>
    );
  }
}
