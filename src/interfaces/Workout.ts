import 'Exercise' from './Exercise';

export interface Workout {
  name: string,
  sort_order: number,
  exercises?: Exercise[]
};
