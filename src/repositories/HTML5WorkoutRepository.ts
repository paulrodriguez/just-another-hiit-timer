import IWorkout from '../interfaces/IWorkout';
import IExercise from '../interfaces/IExercise';
import IWorkoutRepository from '../interfaces/IWorkoutRepository';

import {WorkoutFactory} from '../factories/WorkoutFactory';

export default class HTML5WorkoutRepository {
  constructor() {
    if(!window.localStorage) {
      throw new Error('local storage is not defined for your browser');
    }
  }

  /**
   * saves a workout
   *
   * @param {IWorkout} workout
   * @returns {Promise}
   */
  save(workout: IWorkout) {
    if(workout.name == null) {
      throw new Error('name is required');
    }

    let data = workout.toJSON();

    window.localStorage.setItem(workout.id, data);

    let workout_ids_json = window.localStorage.getItem('workout_ids_sorted');

    let workout_ids = [];
    if(workout_ids_json != null) {
       workout_ids = JSON.parse(workout_ids_json);
    }

    let id_index = workout_ids.indexOf(workout.id);

    if (id_index == -1) {
      workout_ids.push(workout.id)
    }

    workout_ids_json = JSON.stringify(workout_ids);

    window.localStorage.setItem('workout_ids_sorted', workout_ids_json);

    return new Promise((resolve)=>{
      resolve(workout);
    });
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

  /**
   *
   */
  list(): IWorkout[] {
    let workout_list = [];

    let workout_ids_json = window.localStorage.getItem('workout_ids_sorted');

    let workout_ids = [];
    if (workout_ids_json != null) {
       workout_ids = JSON.parse(workout_ids_json);
    }

    for (let workout_id in workout_ids) {

      let workout_json = JSON.parse(window.localStorage.getItem(workout_ids[0]));

      workout_list.push(WorkoutFactory.create(workout_json));
    }

    workout_list.sort((a, b) => (a.sort_order > b.sort_order) ? 1 : 1);

    return workout_list;
  }
}
