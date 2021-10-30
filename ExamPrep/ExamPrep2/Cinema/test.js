const { expect } = require('chai');
const cinema = require('./cinema');

describe('cinema tests', () => {
    describe('showMovies test', () => {
        it('Should return list of available movies, separated by a comma and space', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['first', 'second', 'third'])).to.equal('first, second, third');
        });

        it('Should return message if array is empty', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });

    describe('ticketPrice test', () => {
        it('Should return the price according to the type if present in the schedule, ', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });

        it('Should throw error if not present', () => {
            expect(() => cinema.ticketPrice('Not existing')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('Other')).to.throw(Error, 'Invalid projection type.');
        });
    });

    describe('swapSeatsInHall test', () => {
        it('Should swap if numbers valid', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
        });

        it('Should not swap if numbers are not valid', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.1, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', '2')).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});