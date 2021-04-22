import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';
import {SAVE_WORKOUT} from './actionTypes';

let repository = WorkoutRepositoryFactory.create('local');

export const saveWorkoutSuccess = (content: any) => ({
  type: SAVE_WORKOUT,
  payload: content
});

export const saveWorkout = (workout: any) => {
  console.log(workout);
  return function(dispatch: any) {
    let promise = repository.save(workout);
    promise.then(responseWorkout=>{
        dispatch(saveWorkoutSuccess(responseWorkout));
    });
  }
};
