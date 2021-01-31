import {Workout} from '../../src/models/Workout';
import {Exercise} from '../../src/models/Exercise';

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
  workout.exercises = [new Exercise('ex_123_1','Exercise 1','213',0),
    new Exercise('ex_123_2','Exercise 2','213',1)]

  let value = "{\"id\":\"213\",\"name\":\"run\",\"sort_order\":0,";
  value += "\"exercises\":[{\"id\":\"ex_123_1\",\"name\":\"Exercise 1\",\"workout_id\":\"213\",\"sort_order\":0,\"warmup\":null,\"work\":null,\"cooldown\":null},"
  value += "{\"id\":\"ex_123_2\",\"name\":\"Exercise 2\",\"workout_id\":\"213\",\"sort_order\":1,\"warmup\":null,\"work\":null,\"cooldown\":null}]}";
  expect(workout.toJSON()).toBe(value);
});
