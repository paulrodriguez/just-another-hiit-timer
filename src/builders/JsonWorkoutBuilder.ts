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

  id: string;
  name: string;
  sort_order: number;
  exercises: any;

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

    if ('id' in data) {
      this.withId(data.id);
    }

    if ('name' in data) {
      this.withName(data.name);
    }

    if ('sort_order' in data) {
      this.withSortOrder(data.sort_order);
    }

    if ('exercises' in data) {
      this.withExercises(data.exercises);
    }

    return this;
  }

  withId(id: string) {
    this.id = id;

    return this;
  }

  withName(name: string) {
    this.name = name;

    return this;
  }

  withSortOrder(sort_order: number) {
    this.sort_order = sort_order;

    return this;
  }

  withExercises(exercises: any) {
    this.exercises = exercises;

    return this;
  }



  /**
   * builds list of exercises
   *
   * @returns {IExercise[]}
   */
  buildExercises() {
    let exercises: any = this.exercises.map((exercise: any)=>{
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
    let workout = new Workout(this.id, this.name, this.sort_order);

    workout.exercises = this.buildExercises();

    return workout;
  }
}
