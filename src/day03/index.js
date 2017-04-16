const isValid = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);

const part1 = input => input
    .split('\n')
    .map(triangle => triangle.match(/^ *(\d+) +(\d+) +(\d+) *$/))
    .map(match => [Number(match[1]), Number(match[2]), Number(match[3])])
    .filter(sides => isValid(...sides))
    .length;

const part2 = input => input
    .split('\n')
    .map(triangle => triangle.match(/^ *(\d+) +(\d+) +(\d+) *$/))
    .map(match => [Number(match[1]), Number(match[2]), Number(match[3])])
    .map((line, index, triangles) => {
        if (index % 3 === 0) return [triangles[index][0], triangles[index + 1][0], triangles[index + 2][0]];
        if (index % 3 === 1) return [triangles[index - 1][1], triangles[index][1], triangles[index + 1][1]];
        return [triangles[index - 2][2], triangles[index - 1][2], triangles[index][2]];
    })
    .filter(sides => isValid(...sides))
    .length;


module.exports = { part1, part2 };
