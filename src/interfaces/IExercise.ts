import ITime, {TimeData} from './ITime';
import Jsonable from './Jsonable';

export interface ExerciseData {
  id: string,
  work: TimeData,
  warmup: TimeData,
  cooldown: TimeData,
  name: string,
  sort_order: number,
  workout_id: string
}

export default interface IExercise extends Jsonable, ExerciseData {
  work: ITime,
  warmup: ITime,
  cooldown: ITime,
}
