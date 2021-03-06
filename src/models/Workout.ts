import  {IWorkout, IExercise, Jsonable} from '../interfaces';

export class Workout implements IWorkout {
  id: string;
  name: string;
  sort_order: number;
  exercises: Array<IExercise> = [];

  constructor(id: string, name: string, sort_order: number=0) {
    this.id         = id;
    this.name       = name;
    this.sort_order = sort_order;
  }

  toJSON(): string {
    let data = {
      id: this.id,
      name: this.name,
      sort_order: this.sort_order,
      exercises: this.exercises.map(exercise=>JSON.parse(exercise.toJSON()))
    };

    return JSON.stringify(data);
  }

  addExercise(exercise: IExercise): void {
    this.exercises.push(exercise);

    return this;
  }

  removeExercise(id: string): void {
    this.exercises = this.exercises.filter(exercise => exercise.id != id);

    return this;
  }
}
