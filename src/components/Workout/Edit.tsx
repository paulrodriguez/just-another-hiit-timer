import * as React from 'react';

export class WorkoutEdit extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      sort_order: 0,
      exercises: [],
      title: 'Create a new Workout',
      is_new: true
    }

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <>
      <h1>{this.state.title}</h1>
      <form>
        <input type="text" name="name" placeholder="Workout Name" onChange={this.handleChange} />
      </form>
      </>
    );
  }
}
