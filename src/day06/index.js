const frequency = (input, comparator) => {
    const counter = [];

    input.split('\n').forEach((message) => {
        const letters = message.split('');
        letters.forEach((letter, idx) => {
            counter[idx] = counter[idx] || {};
            counter[idx][letter] = (counter[idx][letter] || 0) + 1;
        });
    });

    const password = counter.reduce((password, count) => {
        const sortedByCount = Object.entries(count).sort(comparator);
        const mostFrequentLetter = sortedByCount[0][0];
        return password + mostFrequentLetter;
    }, '');

    return password;
};

const part1 = input => frequency(input, (a, b) => b[1] - a[1]);
const part2 = input => frequency(input, (a, b) => a[1] - b[1]);

module.exports = { part1, part2 };
