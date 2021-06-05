import {Workout} from '../models/Workout';
import {Exercise} from '../models/Exercise';
import {Time} from '../models/Time';

/**
 * JsonWorkoutBuilder class
 *
 * builds workout based on json data
 */
class JsonWorkoutBuilder {
  data: object

  withData(data: object) {
    this.data = data
  }

  buildExercises() {
    let exercises = [];

    for(idx in this.data.exercises) {
      let exerciseData = this.data.exercises[idx];

      let exercise = Exercise()

    }

    return exercises;
  }


  build() {
    let workout = Workout(this.data.id, this.data.name, this.data.sort_order);

    let exercises = buildExercises();
    workout.exercises = exercises;


    return workout;
  }
}
