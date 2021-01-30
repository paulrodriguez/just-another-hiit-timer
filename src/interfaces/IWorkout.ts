import IExercise from './IExercise';

export interface IWorkout {
  id: string,
  name: string,
  sort_order: number,
  exercises?: IExercise[],
  toJSON(): string
};
