import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';
import {ADD_WORKOUT} from './types';
let repository = WorkoutRepositoryFactory.create('local');

export const addWorkout = (content: any) => {
  ({
      type: ADD_WORKOUT,
      payload: {
        id:
        content
      }
  }}
}
