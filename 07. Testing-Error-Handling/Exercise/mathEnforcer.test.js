const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer tests', () => {
    describe('addFive tests', () => {
        it('If the parameter is NOT a number, the function should return undefined', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive('0.1')).to.be.undefined;
            expect(mathEnforcer.addFive('0')).to.be.undefined;
            expect(mathEnforcer.addFive('num')).to.be.undefined;
            expect(mathEnforcer.addFive('')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive({1: 1})).to.be.undefined;
        });

        it('If the parameter is a number, add 5 to it, and return the result', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(0.1)).be.closeTo(5.1, 0.01);
            expect(mathEnforcer.addFive(-0.1)).be.closeTo(4.9, 0.01);
            expect(mathEnforcer.addFive(0.01)).be.closeTo(5.01, 0.01);
            expect(mathEnforcer.addFive(-0.01)).be.closeTo(4.99, 0.01);
        });
    });

    describe('subtractTen test', () => {
        it('If the parameter is NOT a number, the function should return undefined', () => {
            expect(mathEnforcer.subtractTen('-1')).to.be.undefined;
            expect(mathEnforcer.subtractTen('0')).to.be.undefined;
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen('0.1')).to.be.undefined;
            expect(mathEnforcer.subtractTen('-0.1')).to.be.undefined;
            expect(mathEnforcer.subtractTen('num')).to.be.undefined;
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen({1: 1})).to.be.undefined;
        });

        it('If the parameter is a number, subtract 10 from it, and return the result', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(0.1)).to.be.closeTo(-9.9, 0.01);
            expect(mathEnforcer.subtractTen(0.01)).to.be.closeTo(-9.99, 0.01);
            expect(mathEnforcer.subtractTen(-0.1)).to.be.closeTo(-10.1, 0.01);
            expect(mathEnforcer.subtractTen(-0.01)).to.be.closeTo(-10.01, 0.01);
        });
    });

    describe('sum test', () => {
        it('If any of the 2 parameters is NOT a number, the function should return undefined', () => {
            expect(mathEnforcer.sum('num1','num2')).to.be.undefined;
            expect(mathEnforcer.sum('1','2')).to.be.undefined;
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
            expect(mathEnforcer.sum('1',2)).to.be.undefined;
            expect(mathEnforcer.sum([1], 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, [1])).to.be.undefined;
            expect(mathEnforcer.sum([1], [1])).to.be.undefined;
            expect(mathEnforcer.sum(1, {1: 1})).to.be.undefined;
            expect(mathEnforcer.sum({1: 1}, 1)).to.be.undefined;
            expect(mathEnforcer.sum({1: 1}, {1: 1})).to.be.undefined;
        });

        it('If both parameters are numbers, the function should return their sum', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(1, -2)).to.equal(-1);
            expect(mathEnforcer.sum(-1, 2)).to.equal(1);
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
            expect(mathEnforcer.sum(1, -1)).to.equal(0);
            expect(mathEnforcer.sum(1, 0.1)).to.be.closeTo(1.1, 0.01);
            expect(mathEnforcer.sum(1, 0.01)).to.be.closeTo(1.01, 0.01);
            expect(mathEnforcer.sum(-1, 0.1)).to.be.closeTo(-0.9, 0.01);
            expect(mathEnforcer.sum(1, -0.1)).to.be.closeTo(0.9, 0.01);
            expect(mathEnforcer.sum(0.1, 0.1)).to.be.closeTo(0.2, 0.01);
            expect(mathEnforcer.sum(0.01, 0.01)).to.be.closeTo(0.02, 0.01);
            expect(mathEnforcer.sum(-0.1, -0.1)).to.be.closeTo(-0.2, 0.01);
            expect(mathEnforcer.sum(-0.01, -0.01)).to.be.closeTo(-0.02, 0.01);
        });
    });
});