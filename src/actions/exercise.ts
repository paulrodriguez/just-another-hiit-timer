import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';

let repository = WorkoutRepositoryFactory.create('local');

import {SAVE_EXERCISE, DELETE_EXERCISE} from './actionTypes';


export const saveExerciseSuccess = (content: any) => ({
  type: SAVE_EXERCISE,
  payload: content
});

export const saveExercise = (content: any, workout_id: string) => {
  return function(dispatch: any) {
    let promise = repository.addExercise(content, workout_id);
    promise.then(exercise=>{
      dispatch(saveExerciseSuccess(exercise));
    })
  }
};

export const deleteExercise => () {

}

export const sortExercises => () {

}
