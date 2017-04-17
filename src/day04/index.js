const roomInfo = (room) => {
    const re = /^(.*)-(\d+)\[([a-z]{5})\]/;
    const [, name, sector, checksum] = room.match(re);

    // Remove dashes from the name and split it by letter
    const letters = name.replace(/-/g, '').split('');

    // Produce a list of tuplas with the letter and the ocurrence count
    const count = Object.entries(letters.reduce((count, letter) => {
        count[letter] = (count[letter] || 0) + 1;
        return count;
    }, {}));

    // Get the top 5 letters by count
    count.sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]));
    count.length = 5;

    // Compute the checksum
    const computedChecksum = count.map(([letter]) => letter).join('');

    return {
        sector: Number(sector),
        isReal: computedChecksum === checksum,
    };
};

const decrypt = (room) => {
    const re = /^(.*)-(\d+)/;
    const [, name, sector] = room.match(re);

    const letters = name.split('');
    const decryptedName = letters.map((letter) => {
        if (letter === '-') return ' ';
        return String.fromCharCode(((letter.charCodeAt(0) + Number(sector) - 97) % 26) + 97);
    }).join('');

    return { decryptedName, sector };
};

const part1 = input => input
    .split('\n')
    .map(roomInfo)
    .filter(({ isReal }) => isReal)
    .reduce((total, { sector }) => total + sector, 0);

const part2 = input => input
    .split('\n')
    .map(decrypt)
    .filter(({ decryptedName }) => decryptedName === 'northpole object storage')[0].sector;

module.exports = { part1, part2, roomInfo, decrypt };
