let pointsToSize = points => 100 - points * 10 + 10;
let speedToDuration = (speed, distance) => distance / speed;

export { pointsToSize, speedToDuration };
