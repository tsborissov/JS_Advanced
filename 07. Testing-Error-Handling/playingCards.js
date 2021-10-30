function createCard(faceInp, suitInp) {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
    
    if (!faces.includes(faceInp) || suits[suitInp] == undefined) {
        throw new Error();
    }

    const card = {
        face: faceInp,
        suit: suits[suitInp],
        toString: () => {
            return `${card.face}${card.suit}`;
        },
    }

    return card;
}

console.log(createCard('1', 'S').toString());
console.log(createCard('2', 's').toString());
console.log(createCard('2', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('A', 'C').toString());