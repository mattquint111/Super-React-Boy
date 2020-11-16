const CANVAS_SIZE = [500, 500]
const SNAKE_START = [
    [15, 15],
    [15, 16]
]
const APPLE_START = [8, 3]
const SCALE = 20
const SPEED = 100
const DIRECTIONS = {
    38: [0, -1], //up
    40: [0, 1], //down
    37: [-1, 0], //left
    39: [1, 0] //right
}

export {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
}