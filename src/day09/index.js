const decompress = (input) => {
    let pointer = 0;
    let character;
    let output = '';
    const marker = /\(([0-9]+)x([0-9]+)\)/g;

    while (character = input[pointer]) {
        if (character === '(') {
            marker.lastIndex = pointer;
            const [, len, rep] = marker.exec(input).map(Number);
            const repeatedString = input.substr(marker.lastIndex, len);
            output += Array(rep).fill(repeatedString).join('');
            pointer = marker.lastIndex + len;
        } else {
            output += character;
            pointer++;
        }
    }
    return output;
};

const splitIntoMarkerChunks = (input) => {
    const chunks = [];
    let pointer = 0;
    let character;
    const compressedChunk = /\(([0-9]+)x([0-9]+)\)/g;
    const toNextMarter = /[^(]+/g;

    while (character = input[pointer]) {
        if (character === '(') {
            compressedChunk.lastIndex = pointer;
            const [marker, len, rep] = compressedChunk.exec(input);
            const chunk = input.substr(pointer + marker.length, Number(len));
            chunks.push({
                rep: Number(rep),
                chunks: splitIntoMarkerChunks(chunk),
            });
            pointer = pointer + marker.length + Number(len);
        } else {
            toNextMarter.lastIndex = pointer;
            const chunk = toNextMarter.exec(input)[0];
            chunks.push(chunk);
            pointer += chunk.length;
        }
    }

    return chunks;
};

const lengthOfChunks = chunks => chunks.reduce((acc, chunk) => {
    if (typeof chunk === 'object') return acc + chunk.rep * lengthOfChunks(chunk.chunks);
    return acc + chunk.length;
}, 0);

const part1 = input => decompress(input).length;
const part2 = (input) => {
    const chunks = splitIntoMarkerChunks(input);
    return lengthOfChunks(chunks);
};

module.exports = { part1, part2, decompress, splitIntoMarkerChunks };
