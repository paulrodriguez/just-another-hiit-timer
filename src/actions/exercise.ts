import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';

let repository = WorkoutRepositoryFactory.create('local');

import {ADD_EXERCISE, DELETE_EXERCISE} from './exercise';

export const addExercise = (content) => ({
    type: ADD_EXERCISE,
    payload: {
      id:
      content
    }
}}

export const deleteExercise = () {

}

export const sortExercises = () {

}
