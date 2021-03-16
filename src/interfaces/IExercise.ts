import ITime from './ITime';

export default interface IExercise {
  id: string,
  warmup: ITime,
  work: ITime,
  cooldown: ITime,
  name: string
  sort_order: number,
  workout_id: string,
  toJSON(): string
}
