import {Workout} from '../models/Workout';
export class WorkoutFactory
{
  create(data: object) {
    console.log(data)
    let workout = new Workout(data.id, data.name, data.sort_order);
    workout.exercises = data.exercises;

    return workout;
  }
}
