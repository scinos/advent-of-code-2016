const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('../../src/day07');

describe('--- Day 7: Internet Protocol Version 7 ---', () => {
    describe('--- Part 1 ---', () => {
        it('abba[mnop]qrst supports TLS (abba outside square brackets)', () => {
            expect(part1('abba[mnop]qrst')).to.equal(1);
        });
        it('abcd[bddb]xyyx does not support TLS (bddb is within square brackets, even though xyyx is outside square brackets)', () => {
            expect(part1('abcd[bddb]xyyx')).to.equal(0);
        });
        it('aaaa[qwer]tyui does not support TLS (aaaa is invalid; the interior characters must be different)', () => {
            expect(part1('aaaa[qwer]tyui')).to.equal(0);
        });
        it('ioxxoj[asdfgh]zxcvbn supports TLS (oxxo is outside square brackets, even though it\'s within a larger string)', () => {
            expect(part1('ioxxoj[asdfgh]zxcvbn')).to.equal(1);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(118);
        });
    });
    describe('--- Part 2 ---', () => {
        it('aba[bab]xyz supports SSL (aba outside square brackets with corresponding bab within square brackets).', () => {
            expect(part2('aba[bab]xyz')).to.equal(1);
        });
        it('xyx[xyx]xyx does not support SSL (xyx, but no corresponding yxy).', () => {
            expect(part2('xyx[xyx]xyx')).to.equal(0);
        });
        it('aaa[kek]eke supports SSL (eke in supernet with corresponding kek in hypernet; the aaa sequence is not related, because the interior character must be different).', () => {
            expect(part2('aaa[kek]eke')).to.equal(1);
        });
        it('zazbz[bzb]cdb supports SSL (zaz has no corresponding aza, but zbz has a corresponding bzb, even though zaz and zbz overlap).', () => {
            expect(part2('zazbz[bzb]cdb')).to.equal(1);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal(260);
        });
    });
});
