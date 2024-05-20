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
        this.saveGame();
        this.notify();
    }

    saveGame(){
        //localStorage.setItem("memory",this.#memory);
        //localStorage.setItem("memory",JSON.stringify(this.#memory));
        //localStorage.setItem("memory",JSON.stringify(this.#memory.toData()));
        sessionStorage.setItem("memory",JSON.stringify(this.#memory.toData()));
    }

    loadGame(){
        //const savedData = localStorage.getItem("memory");
        const savedData = sessionStorage.getItem("memory");
        if(savedData){
            this.#memory.fromData(JSON.parse(savedData));
            this.notify();
            return true;
        }
        else{
            return false;
        }
    }

    start(){
        const bool = this.loadGame();
        if(bool === false){
            this.newGame();
        }
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