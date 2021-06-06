import {Workout} from '../models/Workout';

import IWorkout from '../interfaces/IWorkout';

import {JsonExerciseBuilder} from './JsonExerciseBuilder';

/**
 * JsonWorkoutBuilder class
 *
 * builds workout based on json data
 */
export class JsonWorkoutBuilder {
  data: any;

  private exerciseBuilder: JsonExerciseBuilder;

  /**
   * Constructor
   */
  constructor() {
    this.exerciseBuilder = new JsonExerciseBuilder();
  }

  /**
   * set data
   *
   * @param {object} data
   * @returns {JsonWorkoutBuilder}
   */
  withData(data: any) {
    this.data = data;

    return this;
  }

  /**
   * builds list of exercises
   *
   * @returns {IExercise[]}
   */
  buildExercises() {
    let exercises: any = this.data.exercises.map((exercise: any)=>{
      return this.exerciseBuilder.withData(exercise).build();
    });

    return exercises;
  }

  /**
   * build and return object
   *
   * @returns {IWorkout}
   */
  build(): IWorkout {
    let workout = new Workout(this.data.id, this.data.name, this.data.sort_order);

    workout.exercises = this.buildExercises();

    return workout;
  }
}
