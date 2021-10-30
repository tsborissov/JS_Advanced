function printDeckOfCards(cards) {
    function createCard(faceInp, suitInp) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        
        if (!faces.includes(faceInp) || suits[suitInp] == undefined) {
            throw new Error(`Invalid card: ${faceInp}${suitInp}`);
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
      
    const result = [];
    try {
        for (const card of cards) {
            const face = card.substring(0, card.length - 1);
            const suit = card[card.length - 1];
            result.push(createCard(face, suit));
        }

        console.log(result.join(' '));
    } catch (ex) {
        console.log(ex.message);
    }
  }
  

  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['5S', '3D', 'QD', '1C']);