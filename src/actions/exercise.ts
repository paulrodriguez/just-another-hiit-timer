import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';

let repository = WorkoutRepositoryFactory.create('local');

import {SAVE_EXERCISE, DELETE_EXERCISE} from './actionTypes';

export const addExercise = (content: any) => ({
    type: ADD_EXERCISE,
    payload: content
});

export const saveExerciseSuccess = (content: any) => ({
  type: SAVE_EXERCISE,
  payload: content
});

export const saveExercise = (content: any) => {
  return function(dispatch: any) {
    let promise = repository.saveExercise(content);
    promise.then(exercise=>{
      dispatch(saveExerciseSuccess(exercise));
    })
  }
};

export const deleteExercise = () {

}

export const sortExercises = () {

}
