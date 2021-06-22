import IExercise, {ExerciseData} from './IExercise';
import Jsonable from './Jsonable';

export interface WorkoutData {
  id: string,
  name: string,
  sort_order: number,
  exercises?: Array<ExerciseData>,
}

export default interface IWorkout extends Jsonable, WorkoutData {
  exercises?: Array<IExercise>,
  addExercise(exercise: IExercise): void,
  removeExercise(id: string): void,
};
