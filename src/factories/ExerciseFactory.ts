import {Exercise} from '../models/Exercise';

/**
 * ExerciseFactory class
 *
 */
export class ExerciseFactory
{
  /**
   * static method that creates an exercise entity
   *
   * @param {Object} data
   */
  public static create(data: object): Exercise {
    let workout = new Exercise(data.id, data.name, data.sort_order);
  }
}
