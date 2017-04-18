const abbaInsideBrakets = /\[[^\]]*([a-z])((?!\1).)\2\1/;
const abba = /([a-z])((?!\1).)\2\1/;
const aba = /([a-z])((?!\1).)\1/g;

const isValidIp = (ip) => {
    if (ip.match(abbaInsideBrakets)) return false;
    if (ip.match(abba)) return true;
    return false;
};

const part1 = input => input
    .split('\n')
    .filter(isValidIp)
    .length;

const part2 = input => input
        .split('\n')
        .map((ip) => {
            let lastBlock = 0;
            const inside = [];
            const outside = [];
            ip.replace(/\[(.*?)\]/g, (match, insideBrackets, offset, str) => {
                inside.push(insideBrackets);
                outside.push(str.substring(lastBlock, offset));
                lastBlock = offset + match.length;
            });
            outside.push(ip.substring(lastBlock));
            return { inside, outside };
        })
        .filter(({ inside, outside }) => inside.some((insideItem) => {
            for (let i = 0; i < insideItem.length - 2; i++) {
                if (insideItem[i] === insideItem[i + 2] && insideItem[i] !== insideItem[i + 1]) {
                    const a = insideItem[i];
                    const b = insideItem[i + 1];

                    const inOutside = outside.some(outsideItem => outsideItem.includes(b + a + b));
                    if (inOutside) return true;
                }
            }
            return false;
        }))
        .length;

module.exports = { part1, part2 };
