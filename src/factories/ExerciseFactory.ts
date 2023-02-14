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
    let exercise = new Exercise(data.id, data.name, data.workout_id, data.sort_order ? data.sort_order : null);

    if (data.work) {
      exercise.work = data.work;
    }

    if (data.warmup) {
      exercise.warmup = data.warmup;
    }

    if (data.cooldown) {
      exercise.cooldown = data.cooldown;
    }

    return exercise;
  }
}
