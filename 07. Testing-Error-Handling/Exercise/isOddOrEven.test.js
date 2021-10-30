const { expect } = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('isOddOrEven test', () => {
    it('Parameter not of type string returns undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(0)).to.be.undefined;
    });

    it('String with even length returns \'even\'', () => {
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('hi')).to.equal('even');
        expect(isOddOrEven('must')).to.equal('even');
    });

    it('String with odd length returns \'odd\'', () => {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('his')).to.equal('odd');
        expect(isOddOrEven('hello')).to.equal('odd');
    });

});