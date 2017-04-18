const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2, updateDisplay } = require('../../src/day08');

describe('--- Day 8: Two-Factor Authentication ----', () => {
    describe('--- Part 1 ---', () => {
        it('`rect 3x2` creates a small rectangle in the top-left corner', () => {
            const display = [
                ['.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.'],
            ];
            expect(updateDisplay('rect 3x2', display)).to.deep.equal([
                ['#', '#', '#', '.', '.', '.', '.'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.'],
            ]);
        });

        it('`rotate column x=1 by 1` rotates the second column down by one pixel', () => {
            const display = [
                ['#', '#', '#', '.', '.', '.', '.'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.'],
            ];
            expect(updateDisplay('rotate column x=1 by 1', display)).to.deep.equal([
                ['#', '.', '#', '.', '.', '.', '.'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '#', '.', '.', '.', '.', '.'],
            ]);
        });

        it('`rotate row y=0 by 4` rotates the top row right by four pixels', () => {
            const display = [
                ['#', '.', '#', '.', '.', '.', '.'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '#', '.', '.', '.', '.', '.'],
            ];
            expect(updateDisplay('rotate row y=0 by 4', display)).to.deep.equal([
                ['.', '.', '.', '.', '#', '.', '#'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '#', '.', '.', '.', '.', '.'],
            ]);
        });

        it('`rotate column x=1 by 1` again rotates the second column down by one pixel, causing the bottom pixel to wrap back to the top', () => {
            const display = [
                ['.', '.', '.', '.', '#', '.', '#'],
                ['#', '#', '#', '.', '.', '.', '.'],
                ['.', '#', '.', '.', '.', '.', '.'],
            ];
            expect(updateDisplay('rotate column x=1 by 1', display)).to.deep.equal([
                ['.', '#', '.', '.', '#', '.', '#'],
                ['#', '.', '#', '.', '.', '.', '.'],
                ['.', '#', '.', '.', '.', '.', '.'],
            ]);
        });

        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(115);
        });
    });

    describe('--- Part 2 ---', () => {
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal([
                '####.####.####.#...##..#.####.###..####..###...##.',
                '#....#....#....#...##.#..#....#..#.#......#.....#.',
                '###..###..###...#.#.##...###..#..#.###....#.....#.',
                '#....#....#......#..#.#..#....###..#......#.....#.',
                '#....#....#......#..#.#..#....#.#..#......#..#..#.',
                '####.#....####...#..#..#.#....#..#.#.....###..##..',
            ].join('\n'));
        });
    });
});
