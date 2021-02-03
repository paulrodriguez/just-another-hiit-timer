import WorkoutRepositoryFactory from '../repositories/WorkoutRepositoryFactory';
let repository = WorkoutRepositoryFactory.create('local');
export const addExercise = () {
  repository.addExercise()
}

export const deleteExercise = () {

}

export const sortExercises = () {

}
