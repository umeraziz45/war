const newDeck = document.querySelector('.new-deck');
const drawCards = document.querySelector('.draw-cards');
const cardsArea = document.querySelector('.cards');

let deckId;

const getNewDeck = () => {
  fetch(`https://deckofcardsapi.com/api/deck/new/`)
  .then( res => res.json())
  .then( data => {
    console.log(data)
    localStorage.setItem('deckId', data.deck_id);
    deckId = localStorage.getItem('deckId');
    }
  ) 
}
const drawTwo = () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then( res => res.json())
    .then( data => {
      console.log(data)
      cardsArea.innerHTML = '';

      for(let obj of data.cards){
       let cardImg = document.createElement('img');
       cardImg.src = obj.image;
       cardsArea.insertAdjacentElement('beforeend', cardImg);
      }

    })
}

newDeck.addEventListener('click', getNewDeck);
drawCards.addEventListener('click', drawTwo);