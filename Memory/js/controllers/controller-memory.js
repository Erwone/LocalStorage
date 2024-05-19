import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;
    //#card = null;
    constructor()
    {
        super();
        this.#memory = new Memory();
    }

    get memory() { return this.#memory };

    newGame() {
        this.#memory.newGame(10);
        this.notify;
    }

    //get card() { return this.#card }

    /*createCard(){
        const tab1 = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        const tab2 = ["C","D","E","F"];

        const n1 = tab1[Math.floor(Math.random() * 15)]
        const n2 = tab2[Math.floor(Math.random() * 3)]

        var value = "0x1F9" + n1 + n2 ;
        console.log(value)
        value = parseInt(value);
        this.#card = new Card(value);
        this.notify();
    }
    */
}