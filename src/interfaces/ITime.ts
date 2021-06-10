import Jsonable from './Jsonable';

export default interface ITime extends Jsonable, TimeData {
}

export interface TimeData {
  minutes: number,
  seconds: number
}
