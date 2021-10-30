const { expect } = require('chai');
const { lookupChar } = require('./charLookUp');

describe('lookupChar tests', () => {

    it('Returns undefined if the first parameter is NOT a string or the second parameter is NOT an integer number', () => {
        expect(lookupChar(1, 0)).to.be.undefined;
        expect(lookupChar('1', '0')).to.be.undefined;
        expect(lookupChar(1, '0')).to.be.undefined;
        expect(lookupChar('test', 0.1)).to.be.undefined;
        expect(lookupChar('test', 1.1)).to.be.undefined;
        expect(lookupChar('test', 2.9)).to.be.undefined;
        expect(lookupChar('test', '2.9')).to.be.undefined;
        expect(lookupChar('test', '2.9')).to.be.undefined;
        expect(lookupChar('test', [])).to.be.undefined;
        expect(lookupChar('test', {})).to.be.undefined;
    });

    it('Returns undefined if no or missing parameters', () => {
        expect(lookupChar('test')).to.be.undefined;
        expect(lookupChar(1)).to.be.undefined;
        expect(lookupChar()).to.be.undefined;
    });

    it('Returns "Incorrect index" if both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number)', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('test', 5)).to.equal('Incorrect index');
    });

    it('If both parameters have correct types and values - return the character at the specified index in the string', () => {
        expect(lookupChar('t', 0)).to.equal('t');
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('test', 3)).to.equal('t');
    });
});