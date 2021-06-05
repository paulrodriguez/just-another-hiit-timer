import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';
import {SAVE_WORKOUT, LOAD_WORKOUTS} from './actionTypes';

let repository = WorkoutRepositoryFactory.create('local');

export const saveWorkoutSuccess = (content: any) => ({
  type: SAVE_WORKOUT,
  payload: content
});

export const loadWorkoutsSuccess = (content: any)=>({
  type: LOAD_WORKOUTS,
  payload: content
});

export const getWorkouts = () => {
  return function(dispatch: any) {
    let workouts = repository.list();
    dispatch(loadWorkoutsSuccess(workouts));
  };

}

export const saveWorkout = (workout: any) => {
  return function(dispatch: any) {
    let promise = repository.save(workout);
    promise.then(responseWorkout=>{
        dispatch(saveWorkoutSuccess(responseWorkout));
    });
  }
};

export const getWorkout = async (id: string) => {
  let result = await repository.get(id);
  return result;
}
