import IExercise from './Exercise';

export interface IWorkout {
  id: string,
  name: string,
  sort_order: number,
  exercises?: IExercise[],
  toJSON(): string
};
