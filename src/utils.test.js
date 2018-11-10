import { pointsToSize, speedToDuration } from './utils';

it('maps points to size', () => {
  expect(pointsToSize(10)).toEqual(10);
  expect(pointsToSize(5)).toEqual(60);
  expect(pointsToSize(1)).toEqual(100);
});

it('maps speed to duration', () => {
  expect(speedToDuration(1, 100)).toEqual(100);
  expect(speedToDuration(10, 100)).toEqual(10);
  expect(speedToDuration(100, 100)).toEqual(1);
});
