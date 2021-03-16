import ITime from '../interfaces/ITime';

export class Time implements ITime {
  minutes: number;
  seconds: number;

  constructor(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.number = number;
  }

  toJSON() {
    let data = {
      minutes: minutes,
      seconds: seconds;
    }

    return JSON.stringify(data);
  }
}
