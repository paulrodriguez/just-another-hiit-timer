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

  /**
   * sets object data
   *
   * @param {object} data
   * @returns {JsonTimeBuilder}
   */
  withData(data: any) {
    this.data = data;

    this.minutes = this.data.minutes;
    this.seconds = this.data.seconds;

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
