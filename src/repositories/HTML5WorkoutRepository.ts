import IWorkout from '../interfaces/IWorkout';
import IExercise from '../interfaces/IExercise';
import IWorkoutRepository from '../interfaces/IWorkoutRepository';

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
  save(workout: IWorkout) {
    if(workout.name == null) {
      throw new Error('name is required');
    }

    let data = workout.toJSON();

    window.localStorage.setItem(workout.id, data);

    let workout_ids_json = window.localStorage.getItem('workout_ids_sorted');

    let workout_ids = JSON.parse(workout_ids_json);

    let id_index = workout_ids.indexOf(workout.id);

    if (id_index == -1) {
      workout_ids.push(workout.id)
    }

    workout_ids_json = JSON.stringify(workout_ids);

    window.localStorage.setItem('workout_ids_sorted', $workout_ids_json);

    return data;
  }

  /**
   * delete a workout
   */
  delete(workout: IWorkout) {

  }

  /**
   * save an exercise for a workout
   */
  addExercise(exercise: IExercise, workout_id: string) {

  }

  /**
   * delete a timer in a workout
   */
  deleteExercise(exercise: IExercise, workout_id: string) {

  }

  /**
   * update the sort value for a list of exercises in a workout
   */
  sortExercises() {

  }

  list(): IWorkout[] {
    return [];
  }
}
