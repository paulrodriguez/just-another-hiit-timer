import {Exercise} from '../models/Exercise';

import IExercise from '../interfaces/IExercise';

import {JsonTimeBuilder} from './JsonTimeBuilder';
/**
 * JsonExerciseBuilder class
 *
 * builds exercise object from object data
 */
export class JsonExerciseBuilder {
  private data: any;

  private id: string;
  private name: string;
  private workout_id: string;
  private sort_order: number;

  private cooldown: any;
  private work: any;
  private warmup: any;

  private timerBuilder;

  /**
   * Constructor
   */
  constructor() {
      this.timerBuilder = new JsonTimeBuilder();
  }

  /**
   * sets data based on the object
   *
   * @param {object} data
   * @returns {JsonExerciseBuilder}
   */
  withData(data: any) {
    this.data = data;
    console.log(this.data);
    if('id' in this.data) {
      this.id = this.data.id;
    }

    if('name' in this.data) {
      this.name = this.data.name;
    }

    if('workout_id' in this.data) {
      this.workout_id = this.data.workout_id;
    }

    if('sort_order' in this.data) {
      this.sort_order = this.data.sort_order;
    }

    if('cooldown' in this.data) {
      this.cooldown = this.data.cooldown;
    }

    if('work' in this.data) {
      this.work = this.data.work;
    }

    if('warmup' in this.data) {
      this.warmup = this.data.warmup;
    }

    return this;
  }

  /**
   * builds object from data
   *
   * @return {IExercise}
   */
  build(): IExercise {
    let exercise = new Exercise(this.id, this.name, this.workout_id, this.sort_order);
    let cooldown = this.timerBuilder.withData(this.cooldown).build();
    let work     = this.timerBuilder.withData(this.work).build();
    let warmup   = this.timerBuilder.withData(this.warmup).build();

    exercise.cooldown = cooldown;
    exercise.work     = work;
    exercise.warmup   = warmup;

    return exercise;
  }

}
