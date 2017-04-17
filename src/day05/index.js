const crypto = require('crypto');

const part1 = (id) => {
    let password = '';
    let idx = 0;
    const name = String(id);
    while (password.length !== 8) {
        const hash = crypto.createHash('md5').update(name + idx).digest('hex');
        if (hash.startsWith('00000')) password += hash[5];
        idx++;
    }

    return password;
};

const part2 = (id) => {
    const password = ['_', '_', '_', '_', '_', '_', '_', '_'];
    const name = String(id);
    let numFound = 0;
    let idx = 0;

    while (numFound < 8) {
        const hash = crypto.createHash('md5').update(name + idx).digest('hex');
        if (hash.startsWith('00000')) {
            const position = Number(hash[5]);
            if (position <= 7 && password[position] === '_') {
                password[position] = hash[6];
                numFound++;
            }
        }
        idx++;
    }

    return password.join('');
};

module.exports = { part1, part2 };
