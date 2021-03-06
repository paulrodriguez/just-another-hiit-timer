import HTML5WorkoutRepository from './HTML5WorkoutRepository';

export default class WorkoutRepositoryFactory {
  static create(type: string) {
    if(type == 'local') {
      return new HTML5WorkoutRepository();
    }

    throw new Error('invalid repository type');
    return null;
  }
}
