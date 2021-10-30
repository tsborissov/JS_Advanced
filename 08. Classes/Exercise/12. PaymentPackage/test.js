const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage');

describe('PaymentPackage tests', () => {
    describe('Constructor tests', () => {
        it('Can be instantiated with two parameters - a string name and number value', () => {
            const paymentPackage0 = new PaymentPackage('test', 0);
            const paymentPackage1 = new PaymentPackage('test', 1);
            expect(paymentPackage1.name).to.equal('test');
            expect(paymentPackage0.value).to.equal(0);
            expect(paymentPackage1.value).to.equal(1);
            expect(paymentPackage1.VAT).to.equal(20);
            expect(paymentPackage1.active).to.equal(true);
        });

        it('Should throw Error if name is not a string or empty string', () => {
            expect(() => new PaymentPackage(null, 1)).to.throw(Error);
            expect(() => new PaymentPackage(['test'], 1)).to.throw(Error);
            expect(() => new PaymentPackage({ test: 'test' }, 1)).to.throw(Error);
            expect(() => new PaymentPackage('', 1)).to.throw(Error);
        });

        it('Should throw Error if value is not a number or negative', () => {
            expect(() => new PaymentPackage('test', -1)).to.throw(Error);
            expect(() => new PaymentPackage('test', '1')).to.throw(Error);
            expect(() => new PaymentPackage('test', ['1'])).to.throw(Error);
            expect(() => new PaymentPackage('test', { 1: 1 })).to.throw(Error);
        });
    });

    describe('Accessor name tests', () => {
        it('get should return name', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(paymentPackage.name).to.equal('test');
        });

        it('set should set new value of name', () => {
            const paymentPackage = new PaymentPackage('old_name', 1);
            paymentPackage.name = 'new_name';
            expect(paymentPackage.name).to.equal('new_name');
        });

        it('Should throw an error if not a string or empty string', () => {
            const paymentPackage = new PaymentPackage('old_name', 1);
            expect(() => paymentPackage.name = null).to.throw(Error);
            expect(() => paymentPackage.name = '').to.throw(Error);
            expect(() => paymentPackage.name = 1).to.throw(Error);
            expect(() => paymentPackage.name = ['new_name']).to.throw(Error);
            expect(() => paymentPackage.name = { name: 'new_name' }).to.throw(Error);
        });
    });

    describe('Accessor value tests', () => {
        it('get should return value', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(paymentPackage.value).to.equal(1);
        });

        it('set should set new value', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            paymentPackage.value = 0;
            expect(paymentPackage.value).to.equal(0);
        });

        it('Should throw an error if not a number or negative', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(() => paymentPackage.value = null).to.throw(Error);
            expect(() => paymentPackage.value = '').to.throw(Error);
            expect(() => paymentPackage.value = -1).to.throw(Error);
            expect(() => paymentPackage.value = [1]).to.throw(Error);
            expect(() => paymentPackage.value = { 1: 1 }).to.throw(Error);
        });
    });

    describe('Accessor VAT tests', () => {
        it('get should return VAT', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(paymentPackage.VAT).to.equal(20);
        });

        it('set should set new VAT value', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            paymentPackage.VAT = 0;
            expect(paymentPackage.VAT).to.equal(0);
            paymentPackage.VAT = 1;
            expect(paymentPackage.VAT).to.equal(1);
        });

        it('Should throw an error if not a number or negative', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(() => paymentPackage.VAT = null).to.throw(Error);
            expect(() => paymentPackage.VAT = '').to.throw(Error);
            expect(() => paymentPackage.VAT = -1).to.throw(Error);
            expect(() => paymentPackage.VAT = [1]).to.throw(Error);
            expect(() => paymentPackage.VAT = { 1: 1 }).to.throw(Error);
        });
    });

    describe('Accessor active tests', () => {
        it('get should return active value', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(paymentPackage.active).to.equal(true);
        });

        it('set should set new active value', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            paymentPackage.active = false;
            expect(paymentPackage.active).to.equal(false);
            paymentPackage.active = true;
            expect(paymentPackage.active).to.equal(true);
        });

        it('Should throw an error if not boolean', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            expect(() => paymentPackage.active = null).to.throw(Error);
            expect(() => paymentPackage.active = 'true').to.throw(Error);
            expect(() => paymentPackage.active = 'false').to.throw(Error);
            expect(() => paymentPackage.active = 0).to.throw(Error);
            expect(() => paymentPackage.active = [0]).to.throw(Error);
            expect(() => paymentPackage.active = {}).to.throw(Error);
        });
    });

    describe('Function toString test', () => {
        it('Should return a string, containing an overview of the instance', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            let output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ].join('\n');

            expect(paymentPackage.toString()).to.equal(output);
        });

        it('if the package is not active, "(inactive)" should be appended to the printed name', () => {
            const paymentPackage = new PaymentPackage('test', 1);
            paymentPackage.active = false;
            let output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ].join('\n');

            expect(paymentPackage.toString()).to.equal(output);
        });
    });
});