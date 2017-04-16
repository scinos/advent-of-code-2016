const day1 = require('../../src/day01');
const expect= require('chai').expect;
const fs = require('fs');
const path = require('path');

const part1 = day1.part1;
const part2 = day1.part2;

describe('--- Day 1: No Time for a Taxicab ---', () => {
    describe ('--- Part 1 ---', () => {
        it ('Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.', () => {
            expect(part1('R2, L3')).to.equal(5);
        });
        it ('R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.', () => {
            expect(part1('R2, R2, R2')).to.equal(2);
        });
        it('R5, L5, R5, R3 leaves you 12 blocks away.', () => {
            expect(part1('R5, L5, R5, R3')).to.equal(12);
        });

        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(181)
        })
    });

    describe ('--- Part 2 ---', () => {
        it ('If your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.', () => {
            expect(part2('R8, R4, R4, R8')).to.equal(4);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal(140)
        })
    })
});