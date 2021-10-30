const {expect} = require('chai');
const dealership = require('./dealership');

describe('dealership tests', () => {
    describe('newCarCost test', () => {
        it('Should deducted from new car price if returning old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
            expect(dealership.newCarCost('Audi A6 4K', 50000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
            expect(dealership.newCarCost('Audi TT 8J', 50000)).to.equal(36000);
        });

        it('Should not deducted from new car price if not returning old car', () => {
            expect(dealership.newCarCost('Another car', 50000)).to.equal(50000);
        });
    });

    describe('carEquipment test', () => {
        it('Should return an array with all the selected extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0,2])).to.eql(['heated seats', 'sport rims']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0])).to.eql(['heated seats']);
        });
    });

    describe('euroCategory test', () => {
        it('Should return a message no discount for category , lower than 4', () => {
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('Should return message for discount and final price if category higher than 3', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});

