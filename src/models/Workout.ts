import { IWorkout } from '../interfaces/Workout';
import  { IExercise } from '../interfaces/Exercise';

export class Workout implements IWorkout {
  id: string;
  name: string;
  sort_order: number;
  exercises: IExercise[] = [];

  constructor(id: string, name: string, sort_order: number=0) {
    this.id         = id;
    this.name       = name;
    this.sort_order = sort_order;
  }

  toJSON() {
    let data = {
      id: this.id,
      name: this.name,
      sort_order: this.sort_order,
      exercises: this.exercises.map(exercise=>exercise.toJSON())
    };

    return JSON.stringify(data);
  }
}
