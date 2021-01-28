import * as React from 'react';
import * as Modal from 'react-modal';
import {InputGroup,FormControl, Button,Container,Row,Col} from 'react-bootstrap';
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
      name:this.props.name || '',
      warmup_minutes:this.props.warmup_minutes || 0,
      warmup_seconds: this.props.warmup_seconds || 0,
      work_minutes: 0,
      work_seconds: 0,
      cooldown_minutes: 0,
      cooldown_seconds: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  saveExercise() {
    // TODO: save exercise here
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
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" name="name" value={this.state.name} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Warmp Up</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" min="0" aria-label="Warmup Minutes" value={this.state.warmup_minutes} name="warmup_minutes" placeholder={"Minutes"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
          <FormControl type="number" min="0" max="59" aria-label="Warmup Seconds" value={this.state.warmup_seconds} name="warmup_seconds" placeholder={"Seconds"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Work</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" min="0" aria-label="Work Minutes" value={this.state.work_minutes} name="work_minutes" placeholder={"Minutes"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
          <FormControl type="number" min="0" max="59" aria-label="Work Seconds" value={this.state.work_seconds} name="work_seconds" placeholder={"Seconds"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Cooldown</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" min="0" aria-label="Cooldown Minutes" value={this.state.cooldown_minutes} name="cooldown_minutes" placeholder={"Minutes"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
          <FormControl type="number" min="0" max="59" aria-label="Cooldown Seconds" value={this.state.cooldown_seconds} name="cooldown_seconds" placeholder={"Seconds"} onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Button variant="success" onClick={this.saveExercise}>Add</Button>
        </Container>
    </Modal>
    );
  }
}
