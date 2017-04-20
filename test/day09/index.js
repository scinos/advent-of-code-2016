const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2, decompress, splitIntoMarkerChunks } = require('../../src/day09');

describe('--- Day 9: Explosives in Cyberspace ---', () => {
    describe('Decompress', () => {
        it('ADVENT contains no markers and decompresses to itself with no changes', () => {
            expect(decompress('ADVENT')).to.equal('ADVENT');
        });
        it('A(1x5)BC repeats only the B a total of 5 times, becoming ABBBBBC', () => {
            expect(decompress('A(1x5)BC')).to.equal('ABBBBBC');
        });
        it('(3x3)XYZ becomes XYZXYZXYZ', () => {
            expect(decompress('(3x3)XYZ')).to.equal('XYZXYZXYZ');
        });
        it('A(2x2)BCD(2x2)EFG doubles the BC and EF, becoming ABCBCDEFEFG', () => {
            expect(decompress('A(2x2)BCD(2x2)EFG')).to.equal('ABCBCDEFEFG');
        });
        it('X(8x2)(3x3)ABCY becomes X(3x3)ABC(3x3)ABCY', () => {
            expect(decompress('X(8x2)(3x3)ABCY')).to.equal('X(3x3)ABC(3x3)ABCY');
        });
    });

    describe('Split into chunks', () => {
        it('Detects strings with no chunks', () => {
            expect(splitIntoMarkerChunks('abc')).to.deep.equal([
                'abc',
            ]);
        });
        it('Detect markers inside the string', () => {
            expect(splitIntoMarkerChunks('abc(3x1)abcdef')).to.deep.equal([
                'abc',
                { rep: 1, chunks: ['abc'] },
                'def',
            ]);
        });
        it('Detects markers inside markers', () => {
            expect(splitIntoMarkerChunks('X(8x2)(3x3)ABCY')).to.deep.equal([
                'X',
                { rep: 2, chunks: [
                    { rep: 3, chunks: [
                        'ABC',
                    ] },
                ] },
                'Y',
            ]);
            expect(splitIntoMarkerChunks('(27x12)(20x12)(13x14)(7x10)(1x12)A')).to.deep.equal([
                { rep: 12, chunks: [
                    { rep: 12, chunks: [
                        { rep: 14, chunks: [
                            { rep: 10, chunks: [
                                { rep: 12, chunks: [
                                    'A',
                                ] },
                            ] },
                        ] },
                    ] },
                ] },
            ]);
        });
    });

    describe('--- Part 1 ---', () => {
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(183269);
        });
    });

    describe('--- Part 2 ---', () => {
        it('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN becomes 445 characters long.', () => {
            expect(part2('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN')).to.equal(445);
        });
        it('(27x12)(20x12)(13x14)(7x10)(1x12)A decompresses into a string of A repeated 241920 times.', () => {
            expect(part2('(27x12)(20x12)(13x14)(7x10)(1x12)A')).to.equal(241920);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal(11317278863);
        });
    });
});
