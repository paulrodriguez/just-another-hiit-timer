import * as React from 'react';


import {ExerciseModal} from './ExerciseModal';



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
    console.log(props);
  }

  handleChange() {

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
      <>
      <h1>{this.state.title}</h1>
      <form>
        <input type="text" name="name" placeholder="Workout Name" onChange={this.handleChange} />
        <div><span>Exercises</span><button onClick={this.openModal}>Add</button></div>
        <div id="exercises">
        </div>
      </form>
      <ExerciseModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
      </>
    );
  }
}
