const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const { part1, part2, roomInfo, decrypt } = require('../../src/day04');

describe('--- Day 4: Security Through Obscurity ---', () => {
    describe('Detect real room', () => {
        it('aaaaa-bbb-z-y-x-123[abxyz] is a real room', () => {
            expect(roomInfo('aaaaa-bbb-z-y-x-123[abxyz]').isReal).to.equal(true);
        });
        it('a-b-c-d-e-f-g-h-987[abcde] is a real room', () => {
            expect(roomInfo('a-b-c-d-e-f-g-h-987[abcde]').isReal).to.equal(true);
        });
        it('not-a-real-room-404[oarel] is a real room', () => {
            expect(roomInfo('not-a-real-room-404[oarel]').isReal).to.equal(true);
        });
        it('totally-real-room-200[decoy] is not', () => {
            expect(roomInfo('totally-real-room-200[decoy]').isReal).to.equal(false);
        });
    });

    describe('--- Part 1 ---', () => {
        it('Of the real rooms from the list above, the sum of their sector IDs is 1514', () => {
            expect(part1([
                'aaaaa-bbb-z-y-x-123[abxyz]',
                'a-b-c-d-e-f-g-h-987[abcde]',
                'not-a-real-room-404[oarel]',
                'totally-real-room-200[decoy]',
            ].join('\n'))).to.equal(1514);
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part1(input)).to.equal(137896);
        });
    });

    describe('--- Part 2 ---', () => {
        it('The real name for qzmt-zixmtkozy-ivhz-343 is "very encrypted name"', () => {
            expect(decrypt('qzmt-zixmtkozy-ivhz-343').decryptedName).to.equal('very encrypted name');
        });
        it('Solves the input', () => {
            const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');
            expect(part2(input)).to.equal('501');
        });
    });
});
