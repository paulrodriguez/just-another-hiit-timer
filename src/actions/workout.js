import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';

let repository = WorkoutRepositoryFactory.create('local');

export const addWorkout = (workout) =< {
  repository.save(workout);
}
