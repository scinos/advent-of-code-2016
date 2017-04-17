const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('../../src/day03');

describe('--- Day 3: Squares With Three Sides ---', () => {
    describe('--- Part 1 ---', () => {
        it('5 10 25 is an imposible triangle', () => {
            expect(part1('5 10 25')).to.equal(0);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(869);
        });
    });

    describe('--- Part 2 ---', () => {
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal(1544);
        });
    });
});
