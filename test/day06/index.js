const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2 } = require('../../src/day06');

describe('--- Day 6: Signals and Noise ---', () => {
    describe('--- Part 1 ---', () => {
        it('Solves the example', () => {
            expect(part1([
                'eedadn',
                'drvtee',
                'eandsr',
                'raavrd',
                'atevrs',
                'tsrnev',
                'sdttsa',
                'rasrtv',
                'nssdts',
                'ntnada',
                'svetve',
                'tesnvt',
                'vntsnd',
                'vrdear',
                'dvrsen',
                'enarar',
            ].join('\n'))).to.equal('easter');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal('ursvoerv');
        });
    });

    describe('--- Part 2 ---', () => {
        it('Solves the example', () => {
            expect(part2([
                'eedadn',
                'drvtee',
                'eandsr',
                'raavrd',
                'atevrs',
                'tsrnev',
                'sdttsa',
                'rasrtv',
                'nssdts',
                'ntnada',
                'svetve',
                'tesnvt',
                'vntsnd',
                'vrdear',
                'dvrsen',
                'enarar',
            ].join('\n'))).to.equal('advent');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal('vomaypnn');
        });
    });
});
