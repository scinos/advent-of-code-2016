const flipSign = sign => (sign === '+' ? '-' : '+');
const flipDirection = direction => (direction === 'Y' ? 'X' : 'Y');

const inc = function* (from, to) {
    for (let i = from; i <= to; i++) yield i;
};

const dec = function* (from, to) {
    for (let i = from; i >= to; i--) yield i;
};

const computePosition = input => input
    // Split & sanitize
    .split(',').map(item => item.trim())

    // Get components (direction and steps)
    .map(item => item.match(/^([LR])([0-9]+)$/))
    .map(match => ({ turn: match[1], steps: Number(match[2]) }))

    // Compute the final steps
    .reduce(({ places, position, direction, sign, firstVisitedTwice }, { turn, steps }) => {
        const updatePosition = (coord, increment) => {
            position[coord] += increment;
            places[position] = (places[position] || 0) + 1;
            if (places[position] === 2 && !firstVisitedTwice) firstVisitedTwice = Object.assign({}, position);
        };

        // Flip the sign
        if (
            (direction === 'Y' && turn === 'L') ||
            (direction === 'X' && turn === 'R')
        ) sign = flipSign(sign);

        // Flip the direction
        direction = flipDirection(direction);

        // Compute which coordinate needs update based on the direction of the movement
        const coordToUpdate = direction === 'X' ? 0 : 1;

        // Compute how we should increment or decrement the coordinate based on the sign of movement
        const counter = sign === '+' ? inc(1, steps) : dec(-1, -steps);

        // Compute how much we should change the coordinate based on the sign of movement
        const step = sign === '+' ? 1 : -1;

        // Update the position
        for (const _ of counter) updatePosition(coordToUpdate, step); // eslint-disable-line no-unused-vars

        return { places, position, direction, sign, firstVisitedTwice };
    }, {
        places: {
            '0,0': 1,
        },
        position: [0, 0],
        direction: 'Y',
        sign: '+',
        firstVisitedTwice: null,
    });

const part1 = (input) => {
    const results = computePosition(input);
    return Math.abs(results.position[0]) + Math.abs(results.position[1]);
};

const part2 = (input) => {
    const results = computePosition(input);
    return Math.abs(results.firstVisitedTwice[0]) + Math.abs(results.firstVisitedTwice[1]);
};

module.exports = { part1, part2 };
