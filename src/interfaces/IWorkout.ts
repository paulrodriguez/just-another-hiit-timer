import IExercise from './IExercise';

export default interface IWorkout {
  id: string,
  name: string,
  sort_order: number,
  exercises?: IExercise[],
  addExercise(exercise: IExercise): void,
  removeExercise(id: string): void,
  toJSON(): string
};
