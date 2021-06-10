import {Time} from '../models/Time';

import ITime from '../interfaces/ITime';



/**
 * JsonWorkoutBuilder class
 *
 * builds workout based on json data
 */
export class JsonTimeBuilder {
  private data: any

  private minutes: number
  private seconds: number

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
  }
  /**
   * sets object data
   *
   * @param {object} data
   * @returns {JsonTimeBuilder}
   */
  withData(data: any) {
    this.data = data;

    if ('minutes' in data) {
      this.withMinutes(data.minutes);
    }

    if ('seconds' in data) {
      this.withSeconds(data.seconds);
    }

    return this;
  }

  withMinutes(minutes: number) {
    this.minutes = minutes;

    return this;
  }

  withSeconds(seconds: number) {
    this.seconds = seconds;

    return this;
  }

  /**
   * builds object
   *
   * @returns {ITime}
   */
  build(): ITime {
    let time = new Time(this.minutes, this.seconds);

    return time;
  }
}
