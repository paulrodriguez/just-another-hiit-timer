/**
 * Jsonable interface
 *
 * for creating classes that can be turned into a json string
 */
export default interface Jsonable {
  toJSON(): string;
}
