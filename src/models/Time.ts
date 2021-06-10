import ITime from '../interfaces/ITime';
import Jsonable from '../interfaces/Jsonable';

export class Time implements ITime {
  minutes: number;
  seconds: number;

  constructor(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  toJSON() {
    let data = {
      minutes: this.minutes,
      seconds: this.seconds
    }

    return JSON.stringify(data);
  }
}
