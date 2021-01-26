import {Workout} from '../../src/models/Workout';
improt {Exercise} from '../../src/models/Exercise';

test('workout is initialized correctly', () => {
  let workout = new Workout('213','run',0);

  expect(workout.id).toBe('213');
  expect(workout.name).toBe('run');
  expect(workout.sort_order).toBe(0);
});

test('workout parses to JSON', () => {
  let workout = new Workout('213','run',0);

  let value = "{\"id\":\"213\",\"name\":\"run\",\"sort_order\":0,\"exercises\":[]}";
  expect(workout.toJSON()).toBe(value);
});

// @TODO finish this test
test('workout with exercises parses to JSON', () => {
  let workout = new Workout('213','run',0);

  let value = "{\"id\":\"213\",\"name\":\"run\",\"sort_order\":0,\"exercises\":[]}";
  expect(workout.toJSON()).toBe(value);
});
