import IExercise from './IExercise';

export default interface IWorkout {
  id: string,
  name: string,
  sort_order: number,
  exercises?: IExercise[],
  toJSON(): string
};
