import  IExercise from '../interfaces/IExercise';
import ITime from '../interfaces/ITime';

export class Exercise implements IExercise {
  id: string;
  warmup: ITime;
  work: ITime;
  cooldown: ITime;
  name: string;
  sort_order: number;
  workout_id: string;


  constructor(
    id: string,
    name: string,
    workout_id: string,
    sort_order: number=0
  ) {
    this.id         = id;
    this.name       = name;
    this.workout_id = workout_id;
    this.sort_order = sort_order;
  }

  toJSON() {
    let data = {
      id: this.id,
      name: this.name,
      workout_id: this.workout_id,
      sort_order: this.sort_order,
      warmup: (this.warmup) ? this.warmup.toJSON() : null,
      work: (this.work) ? this.work.toJSON() : null,
      cooldown: (this.cooldown) ? this.cooldown.toJSON() : null
    };

    return JSON.stringify(data);
  }
}
