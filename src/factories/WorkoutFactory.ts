import {Workout} from '../models/Workout';

/**
 * WorkoutFactory class
 *
 */
export class WorkoutFactory
{
  /**
   * static method that creates a workout entity
   *
   * @param {Object} data
   */
  public static create(data: object): Workout {
    let workout = new Workout(data.id, data.name, data.sort_order);
    workout.exercises = data.exercises;

    return workout;
  }
}
