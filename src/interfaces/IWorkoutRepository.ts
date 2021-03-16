import IWorkout from './IWorkout';
import IExercise from './IExercise';

export default interface IWorkoutRepository {
  save: (workout: IWorkout) => void,
  delete:(workout: IWorkout) => void,
  deleteById: (id: number) => void,
  list: () => IWorkout[],
  addExercise: (exercise: IExercise) => void,
  deleteExercise: (exercise: IExercise)=>void,
  deleteExerciseById: (id: number)=>void

}
