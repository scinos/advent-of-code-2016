const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2, getNextNumber } = require('../../src/day02');

describe('--- Day 2: Bathroom Security ---', () => {
    describe('Number selection', () => {
        const KEYPAD = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        it('Instruction U', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => getNextNumber(KEYPAD, i, 'U')))
                .to.deep.equal([1, 2, 3, 1, 2, 3, 4, 5, 6]);
        });
        it('Instruction D', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => getNextNumber(KEYPAD, i, 'D')))
                .to.deep.equal([4, 5, 6, 7, 8, 9, 7, 8, 9]);
        });
        it('Instruction R', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => getNextNumber(KEYPAD, i, 'R')))
                .to.deep.equal([2, 3, 3, 5, 6, 6, 8, 9, 9]);
        });
        it('Instruction L', () => {
            expect([1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => getNextNumber(KEYPAD, i, 'L')))
                .to.deep.equal([1, 1, 2, 4, 4, 5, 7, 7, 8]);
        });
    });
    describe('--- Part 1 ---', () => {
        it('Suppose your instructions are: ULL RRDDD LURDL UUUUD', () => {
            expect(part1('ULL\nRRDDD\nLURDL\nUUUUD')).to.equal('1985');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal('44558');
        });
    });

    describe('--- Part 2 ---', () => {
        it('Suppose your instructions are: ULL RRDDD LURDL UUUUD', () => {
            expect(part2('ULL\nRRDDD\nLURDL\nUUUUD')).to.equal('5DB3');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal('6BBAD');
        });
    });
});
