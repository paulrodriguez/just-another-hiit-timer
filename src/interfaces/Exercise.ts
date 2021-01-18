import { Time } from './Time';

interface Exercise {
  warmup: Time,
  work: Time,
  cooldown: Time,
  name: string
  sort_order: number,
  workout_id: string
}
