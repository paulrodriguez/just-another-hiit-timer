import Jsonable from './Jsonable';

export interface TimeData {
  minutes: number,
  seconds: number
}

export default interface ITime extends Jsonable, TimeData {
}
