import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        const cards = this.#controllerMemory.memory;
        this.displayCards(cards);
    }

    displayCard(card){
        const cards = document.querySelector(".cards");
        let enfant = document.createElement("div");
        enfant.classList.add("card");
        enfant.innerHTML = "&#x" + (card.value).toString(16);
        cards.appendChild(enfant);
        //enfant.addEventListener('click', () => this.#controllerMemory.createCard());
    }

    displayCards(){
        const cardsContainer = document.getElementsByClassName("cards")[0];
        cardsContainer.innerHTML = "";

        for (let i = 0; i < cards.getCardsNumber(); i++) {
            this.displayCard(cards.getCard(i));
        }
    }
}