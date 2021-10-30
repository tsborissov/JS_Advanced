const { expect } = require('chai');
const numberOperations = require('./03.NumberOperations');

describe('NumbeOperations tests', () => {
    describe('powNumber test', () => {
        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(-1)).to.equal(1);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(1)).to.equal(1);
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
    });

    describe('numberChecker test', () => {
        it('Should throw an error if the input is not a number', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw(Error);
            expect(() => numberOperations.numberChecker('Not a number')).to.throw(Error);
            expect(() => numberOperations.numberChecker({})).to.throw(Error);
        });

        it('Should return \'The number is lower than 100!\' if number is lower than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
        });

        it('Should return \'The number is greater or equal to 100!\' if number is greater or equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays test', () => {
        it('Should return new array, which represents the sum of the two arrays by indexes', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [3, 2, 1])).to.eql([4, 4, 4]);
            expect(numberOperations.sumArrays([-1, -2, -3], [-3, -2, -1])).to.eql([-4, -4, -4]);
            expect(numberOperations.sumArrays([-1, -2, -3], [3, 2, 1])).to.eql([2, 0, -2]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.eql([2, 4, 6, 4]);
            expect(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3])).to.eql([2, 4, 6, 4]);
        });
    });
});