import {Workout} from './Workout';
import {Exercise} from './Exercise';

export interface WorkoutRepository {
  save: (workout: Workout) => void,
  delete:(workout: Workout) => void,
  deleteById: (id: number) => void,
  list: () => Workout[],
  addExercise: (exercise: Exercise) => void,
  deleteExercise: (exercise: Exercise)=>void,
  deleteExerciseById: (id: number)=>void

}
