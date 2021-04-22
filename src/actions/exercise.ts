import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';

let repository = WorkoutRepositoryFactory.create('local');

import {ADD_EXERCISE, DELETE_EXERCISE} from './actionTypes';

export const addExercise = (content: any) => ({
    type: ADD_EXERCISE,
    payload: content
}}

export const deleteExercise = () {

}

export const sortExercises = () {

}
