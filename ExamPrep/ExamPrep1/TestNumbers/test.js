const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('testNumbers tests', () => {
    describe('sumNumbers', () => {
        it('Should return the sum of the given numbers, rounded to second number after decimal point', () => {
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(0, 1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, 0)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(-2, -1)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(1.5, 2.5)).to.equal('4.00');
            expect(testNumbers.sumNumbers(2.5, -1.5)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-2.5, -1.5)).to.equal('-4.00');
        });

        it('Should return undefined if parameters are not a number', () => {
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
        });
    });

    describe('numberChecker test', () => {
        it('Should return even/odd if input parses to number', () => {
            expect(testNumbers.numberChecker('0')).to.equal("The number is even!");
            expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
            expect(testNumbers.numberChecker('4')).to.equal("The number is even!");
            expect(testNumbers.numberChecker('-2')).to.equal("The number is even!");
            expect(testNumbers.numberChecker('1')).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('3')).to.equal("The number is odd!");
            expect(testNumbers.numberChecker('-1')).to.equal("The number is odd!");
        });

        it('Should throw error if input not parses to number', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');
        });
    });

    describe('averageSumArray test', () => {
        it('Should return the average sum of array of numbers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1, -2, -3])).to.equal(-2);
            expect(testNumbers.averageSumArray([1.25, 2.25, 3.5])).to.equal(2.3333333333333335);
            expect(testNumbers.averageSumArray([1.25, 3.25, 4.5])).to.equal(3);
        });
    });
});