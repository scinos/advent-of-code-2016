const clone = state => state.map(row => row.slice());

const rect = (width, height, state) => {
    const newState = clone(state);
    for (let w = 0; w < width; w++) {
        for (let h = 0; h < height; h++) {
            newState[h][w] = '#';
        }
    }
    return newState;
};

const rotateColumn = (idx, steps, state) => {
    const rows = state.length;
    const newState = clone(state);
    for (let row = 0; row < rows; row++) {
        const newRow = (row + steps) % rows;
        newState[newRow][idx] = state[row][idx];
    }
    return newState;
};

const rotateRow = (idx, steps, state) => {
    const columns = state[0].length;
    const newState = clone(state);
    for (let column = 0; column < columns; column++) {
        const newColumn = (column + steps) % columns;
        newState[idx][newColumn] = state[idx][column];
    }
    return newState;
};

const updateDisplay = (action, state) => {
    const rectRE = /^rect (\d+)x(\d+)$/;
    const rotateColumnRE = /^rotate column x=(\d+) by (\d+)$/;
    const rotateRowRE = /^rotate row y=(\d+) by (\d+)$/;
    let match;

    match = action.match(rectRE);
    if (match) return rect(Number(match[1]), Number(match[2]), state);

    match = action.match(rotateColumnRE);
    if (match) return rotateColumn(Number(match[1]), Number(match[2]), state);

    match = action.match(rotateRowRE);
    if (match) return rotateRow(Number(match[1]), Number(match[2]), state);

    return state;
};

const flatten = (acc, item) => acc.concat(item);

const computeFinalDisplay = input => input
    .split('\n')
    .reduce((state, action) => updateDisplay(action, state), [
        Array(50).fill('.'),
        Array(50).fill('.'),
        Array(50).fill('.'),
        Array(50).fill('.'),
        Array(50).fill('.'),
        Array(50).fill('.'),
    ]);

const part1 = input => computeFinalDisplay(input)
    .reduce(flatten, [])
    .filter(pixel => pixel === '#')
    .length;

const part2 = input => computeFinalDisplay(input).map(r => r.join('')).join('\n');

module.exports = { part1, part2, updateDisplay };
