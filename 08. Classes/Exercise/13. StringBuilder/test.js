let { expect } = require('chai');
let { StringBuilder } = require('./string-builder');

describe('StringBuilder tests', () => {
    describe('Constructor', () => {
        it('Should be instantiated if no argument passed', () => {
            let sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });

        it('Should be instantiated with a passed in string argument', () => {
            let sb = new StringBuilder('test');
            expect(sb.toString()).to.equal('test');
        });

        it('Should throw error if passed in argument is not a string', () => {
            expect(() => new StringBuilder(1.0123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({one: '1'})).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(['1', '2', '3'])).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder(null)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Function append(string)', () => {
        it('Should add string to the end of the storage', () => {
            let sb = new StringBuilder('test');
            sb.append('_end');
            expect(sb.toString()).to.equal('test_end');
            sb = new StringBuilder();
            sb.append('_end');
            expect(sb.toString()).to.equal('_end');
        });

        it('Should throw error if passed in argument is not a string', () => {
            let sb = new StringBuilder('test');
            expect(() => sb.append(1234)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.append({one: '1'})).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.append(['1', '2', '3'])).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.append(null)).to.throw(TypeError, 'Argument must be a string');
            
        });
    });

    describe('Function prepend(string)', () => {
        it('Should add string to the beginning of the storage', () => {
            let sb = new StringBuilder('test');
            sb.prepend('begin_');
            expect(sb.toString()).to.equal('begin_test');
            sb = new StringBuilder();
            sb.prepend('begin_');
            expect(sb.toString()).to.equal('begin_');
        });

        it('Should throw error if passed in argument is not a string', () => {
            let sb = new StringBuilder('test');
            expect(() => sb.prepend(1234)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.prepend({one: '1'})).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.prepend(['1', '2', '3'])).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.prepend(null)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Function insertAt(string, index)', () => {
        it('Should insert string at the passed index of the storage', () => {
            let sb = new StringBuilder('test');
            sb.insertAt('t', 0);
            expect(sb.toString()).to.equal('ttest');
            sb.insertAt('e', 2);
            expect(sb.toString()).to.equal('tteest');
            sb.insertAt('s', 4);
            expect(sb.toString()).to.equal('tteesst');
            sb.insertAt('t', 6);
            expect(sb.toString()).to.equal('tteesstt');
            sb = new StringBuilder();
            sb.insertAt('t', 0);
            expect(sb.toString()).to.equal('t');
        });

        it('Should throw error if passed in argument is not a string', () => {
            let sb = new StringBuilder('test');
            expect(() => sb.insertAt(1234), 0).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.insertAt({one: '1'}, 1)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.insertAt(['1', '2', '3'], 2)).to.throw(TypeError, 'Argument must be a string');
            expect(() => sb.insertAt(null, 3)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Function remove(startIndex, length)', () => {
        it('Should remove elements from the storage, starting at the given index (inclusive), length number of characters', () => {
            let sb = new StringBuilder('te_remove_st');
            sb.remove(2, 8);
            expect(sb.toString()).to.equal('test');
            sb = new StringBuilder('_remove_test');
            sb.remove(0, 8);
            expect(sb.toString()).to.equal('test');
            sb = new StringBuilder('test_remove_');
            sb.remove(4, 8);
            expect(sb.toString()).to.equal('test');
            sb = new StringBuilder('test');
            sb.remove(0, 4);
            expect(sb.toString()).to.equal('');
        });
    });

    describe('Function toString()', () => {
        it('Should return a string with all elements joined by an empty string', () => {
            let sb = new StringBuilder('test');
            expect(sb.toString()).to.equal('test');
            sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });
    });
});