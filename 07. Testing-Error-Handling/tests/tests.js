const { expect } = require('chai');
const sum = require('./sumOfNumbers');
const isSymmetric = require('./checkForSymmetry');
const rgbToHexColor = require('./rgb-to-hex');

describe('Sum Array Numbers Tests', () => {
    it('Return the sum of the values of all elements inside the array', () => {
        expect(sum([1, 2, 3, 4])).to.equal(10);
        expect(sum([-1, -2, -3, -4])).to.equal(-10);
    });
});

describe('Symmetry Tests', () => {
    it('returns true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        expect(isSymmetric([0, 2, 2, 0])).to.be.true;
        expect(isSymmetric([1, -1, -1, 1])).to.be.true;
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        expect(isSymmetric([-1, -2, -3, -2, -1])).to.be.true;
        expect(isSymmetric([1])).to.be.true;
        expect(isSymmetric([])).to.be.true;
    });

    it('returns false for non symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
        expect(isSymmetric([-1, 2, 3, 4])).to.be.false;
        expect(isSymmetric([0, 2, 3, 0])).to.be.false;
        expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
        expect(isSymmetric([0, 1, 2, 3, 4])).to.be.false;
    });

    it('Return false for any input that isn’t of the correct type', () => {
        expect(isSymmetric(0)).to.be.false;
        expect(isSymmetric([1, '2', 2, 1])).to.be.false;
        expect(isSymmetric('hiih')).to.be.false;
    });
});

describe('rgbToHexColor tests', () => {
    it('Return the same color in hexadecimal format as a string', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(127,127,127)).to.equal('#7F7F7F');
    });

    it('Return undefined if any of the input parameters not in the expected range', () => {
        expect(rgbToHexColor(256,255,255)).to.be.undefined;
        expect(rgbToHexColor(255,256,255)).to.be.undefined;
        expect(rgbToHexColor(255,255,256)).to.be.undefined;
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });

    it('Return undefined if any of the input parameters are of an invalid type', () => {
        expect(rgbToHexColor('255',255,255)).to.be.undefined;
        expect(rgbToHexColor(255,'255',255)).to.be.undefined;
        expect(rgbToHexColor(255,255,'255')).to.be.undefined;
        expect(rgbToHexColor('1',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'1')).to.be.undefined;
    });
});