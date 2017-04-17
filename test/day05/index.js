const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('../../src/day05');

describe('--- Day 5: How About a Nice Game of Chess? ---', () => {
    describe('--- Part 1 ---', () => {
        it('If the Door ID is `abc`, the password is 18f47a30', () => {
            expect(part1('abc')).to.equal('18f47a30');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal('f77a0e6e');
        });
    });

    describe('--- Part 2 ---', () => {
        it('If the Door ID is `abc`, the password is 05ace8e3', () => {
            expect(part2('abc')).to.equal('05ace8e3');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal('999828ec');
        });
    });
});
