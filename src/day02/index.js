const getNextNumber = (KEYPAD, currentNumber, direction) => {
    const WIDTH = Math.sqrt(KEYPAD.length);
    const index = KEYPAD.indexOf(currentNumber);
    let newIndex;

    switch (direction) {
        case 'U': {
            const theoreticalIndex = index - WIDTH;
            const columnLimit = index % WIDTH;
            if (theoreticalIndex < columnLimit) newIndex = index;
            else if (KEYPAD[theoreticalIndex] === 0) newIndex = index;
            else newIndex = theoreticalIndex;
            break;
        }
        case 'D': {
            const theoreticalIndex = index + WIDTH;
            const columnLimit = (index % WIDTH) + (WIDTH * (WIDTH - 1));
            if (theoreticalIndex > columnLimit) newIndex = index;
            else if (KEYPAD[theoreticalIndex] === 0) newIndex = index;
            else newIndex = theoreticalIndex;
            break;
        }
        case 'L': {
            const theoreticalIndex = index - 1;
            const rowLimit = index - (index % WIDTH);
            if (theoreticalIndex < rowLimit) newIndex = index;
            else if (KEYPAD[theoreticalIndex] === 0) newIndex = index;
            else newIndex = theoreticalIndex;
            break;
        }
        case 'R': {
            const theoreticalIndex = index + 1;
            const rowLimit = index - (index % WIDTH) + (WIDTH - 1);
            if (theoreticalIndex > rowLimit) newIndex = index;
            else if (KEYPAD[theoreticalIndex] === 0) newIndex = index;
            else newIndex = theoreticalIndex;
            break;
        }
        default: {
            throw new Error('Unkwon direction');
        }
    }

    return KEYPAD[newIndex];
};

const part1 = (input) => {
    const KEYPAD = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = input
        .split('\n')
        .reduce(({ key, code }, instructions) => {
            const newKey = instructions
                .split('')
                .reduce((currentNumber, direction) => getNextNumber(KEYPAD, currentNumber, direction), key);
            return { key: newKey, code: code + newKey };
        }, {
            key: 5,
            code: '',
        });
    return result.code;
};

const part2 = (input) => {
    const KEYPAD = [0, 0, 1, 0, 0, 0, 2, 3, 4, 0, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 0, 0, 0, 'D', 0, 0];
    const result = input
        .split('\n')
        .reduce(({ key, code }, instructions) => {
            const newKey = instructions
                .split('')
                .reduce((currentNumber, direction) => getNextNumber(KEYPAD, currentNumber, direction), key);
            return { key: newKey, code: code + newKey };
        }, {
            key: 5,
            code: '',
        });
    return result.code;
};

module.exports = { getNextNumber, part1, part2 };
