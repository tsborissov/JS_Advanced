const {expect} = require('chai');
const library = require('./library');

describe('library tests', () => {
    describe('calcPriceOfBook test', () => {
        it('Should return 20.00 if year is greater than 1980', () => {
            expect(library.calcPriceOfBook('Nice Book', 1981)).to.equal('Price of Nice Book is 20.00');
            expect(library.calcPriceOfBook('Nice Book', 2000)).to.equal('Price of Nice Book is 20.00');
        });

        it('Should return 10.00 if year is less than or equal to 1980', () => {
            expect(library.calcPriceOfBook('Nice Book', 1980)).to.equal('Price of Nice Book is 10.00');
            expect(library.calcPriceOfBook('Nice Book', 1979)).to.equal('Price of Nice Book is 10.00');
        });

        it('Should throw an error: "Invalid input" if nameOfBook is not a string', () => {
            expect(() => library.calcPriceOfBook(1, 1981)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 1981)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, 1981)).to.throw('Invalid input');
        });

        it('Should throw an error: "Invalid input" if the year is not an integer number', () => {
            expect(() => library.calcPriceOfBook('Nice Book', '1981')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Nice Book', '')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Nice Book', [1981])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Nice Book', {})).to.throw('Invalid input');
        });
    });

    describe('findBook (booksArr, desiredBook) test', () => {
        it('If present in the array, the function return: "We found the book you want."', () => {
            expect(library.findBook(['book1', 'book2', 'book3'], 'book1')).to.equal('We found the book you want.');
            expect(library.findBook(['book1', 'book2', 'book3'], 'book2')).to.equal('We found the book you want.');
            expect(library.findBook(['book1', 'book2', 'book3'], 'book3')).to.equal('We found the book you want.');
        });

        it('If not present in the array, the function should return: "The book you are looking for is not here!"', () => {
            expect(library.findBook(['book1', 'book2', 'book3'], 'Not Existing')).to.equal('The book you are looking for is not here!');
        });

        it('If the length of the booksArr array is zero, should throw an error ', () => {
            expect(() => library.findBook([], 'book')).to.throw('No books currently available');
        });
    });

    describe('arrangeTheBooks (countBooks) test', () => {
        it('Should throw an error "Invalid input" if the countBooks is not an integer number, or is a negative number', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('If all the books are arranged on the shelves, return: "Great job, the books are arranged."', () => {
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('if no space has been reached, return: "Insufficient space, more shelves need to be purchased."', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(42)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(43)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});