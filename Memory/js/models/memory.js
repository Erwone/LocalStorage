import { Card } from "./card.js";

export class Memory {

  #cards;

  constructor() {
    this.#cards = [];
  }

  newGame(pairsNumber) {
    for (let i = 0; i < pairsNumber; i++) {
      const value = 0x1f90c + i;
      this.#cards.push(new Card(value), new Card(value));
      
      this.#cards = this.#cards.sort(() => Math.random() - 0.5);
    }
  }

  getCardsNumber() {
    return this.#cards.length;
  }

  getCard(index) {
    return this.#cards[index];
  }

  toData(){
    let myCards = [];
    for(let i = 0; i < this.getCardsNumber(); i++){
      const tableau = { 
        value: this.getCard(i).value, 
      }
      myCards.push(tableau);
    }

    const myMemory = {
        myCards,
    }

    return myMemory;
}

fromData(myMemory){
  this.#cards = [];
  for(let i = 0; i < myMemory.myCards.length; i++){
      this.#cards.push(myMemory.myCards[i]);
  }
  return this.#cards;
}

}
