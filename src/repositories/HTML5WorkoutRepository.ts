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

    let data = workout.toJson();

    window.localStorage.setItem(workout.id, data);

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
