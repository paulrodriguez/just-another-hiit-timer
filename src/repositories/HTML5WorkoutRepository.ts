import {Workout} from '../interfaces/Workout';
import {Exercise} from '../interfaces/Exercise';
import {WorkoutRepository} from '../interfaces/WorkoutRepository';

export default class HTML5WorkoutRepository {
  constructor() {
    if(!window.localStorage) {
      throw new Error('local storage is not defined for your browser');
    }
  }

  /**
   * saves a workout
   *
   */
  save(workout: Workout) {
    if(workout.name == null) {
      throw new Error('name is required');
    }

    data = workout.toJson();

    window.localStorage.setItem(workout.id, data);

  }

  /**
   * delete a workout
   */
  delete(workout: Workout) {

  }

  /**
   * save an exercise for a workout
   */
  addExercise(exercise: Exercise) {

  }

  /**
   * delete a timer in a workout
   */
  deleteExercise(exercise: Exercise) {

  }

  /**
   * update the sort value for a list of timers in a workout
   */
  sortExercises() {

  }

  list(): Workout[] {

  }
}
