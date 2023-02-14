import IWorkout from '../interfaces/IWorkout';
import IExercise from '../interfaces/IExercise';
import IWorkoutRepository from '../interfaces/IWorkoutRepository';

import {WorkoutFactory} from '../factories/WorkoutFactory';
import {ExerciseFactory} from '../factories/ExerciseFactory';

import {JsonWorkoutBuilder} from '../builders';

export default class HTML5WorkoutRepository {
  private workoutBuilder: JsonWorkoutBuilder;

  constructor() {
    this.workoutBuilder = new JsonWorkoutBuilder();

    if(!window.localStorage) {
      throw new Error('local storage is not defined for your browser');
    }
  }

  /**
   * saves a workout
   *
   * @param {IWorkout} workout
   * @returns {Promise<T>}
   */
  save(workout: IWorkout): Promise<T> {
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

    // if the workout doesn't exist, then we want to push it to the end of the list.
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
  addExercise(exercise: IExercise, workout_id: string): Promise<T> {
    exercise.workout_id = workout_id;

    let exerciseModel = ExerciseFactory.create(exercise);

    console.log(exerciseModel);

    let workout_json = JSON.parse(window.localStorage.getItem(workout_id));
    let workout = null;
    if(workout_json) {
      workout = WorkoutFactory.create(workout_json);

      console.log(workout_json);
    }
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

  get(id: string): Promise<T> {
    let workout_json = JSON.parse(window.localStorage.getItem(id));

    let workout = null;
    if(workout_json) {
      workout = WorkoutFactory.create(workout_json);
    }

    return new Promise((resolve)=>{
      resolve(workout);
    });
  }

  /**
   * get list of workouts
   *
   * @returns {Promise<T>}
   */
  list(): Promise<T> {
    let workout_list = [];

    let workout_ids_json = window.localStorage.getItem('workout_ids_sorted');

    let workout_ids = [];
    if (workout_ids_json != null) {
       workout_ids = JSON.parse(workout_ids_json);
    }
    for (let index in workout_ids) {
      let workout_json = JSON.parse(window.localStorage.getItem(workout_ids[index]));

      workout_list.push(this.workoutBuilder.withData(workout_json).build());
    }

    workout_list.sort((a, b) => (a.sort_order > b.sort_order) ? 1 : 1);

    return new Promise((resolve)=> {
      resolve(workout_list);
    });
  }
}
