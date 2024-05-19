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
    
      const card = new Card(value);
      const localisation = Math.floor(Math.random()*this.#cards.length)
      this.#cards.splice(localisation, 0, card);
  
    }
  }
  
  getCardsNumber() {
    return this.#cards.length;
  }

  getCard(index) {
    return this.#cards[index];
  }
}
