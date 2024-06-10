// angle testing
console.log(vectors.angle(vectors.create(0,1),vectors.create(1,0)))

// lerp testing
console.log(vectors.getValue(vectors.lerp(vectors.create(1, 1), vectors.create(2, 2), 1.5)))
console.log(vectors.getValue(vectors.clampedLerp(vectors.create(1, 1), vectors.create(2, 2), 1.5)))