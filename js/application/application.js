import { Controller } from "../controllers/controllers";
import { View } from "../views/view";

class Counter{
    #value;

    constructor(){
        this.#value = 0;
    }

    //getValue(){
        //console.log(this.#value);
    //}
    get Value() { return this.#value }

    incrementValue(){
        this.#value +=1;
    }

    decrementValue(){
        this.#value -=1;
    }
}

var controller = new Controller();
var view = new View();


//const counter = new Counter();
//counter.incrementValue();
//counter.incrementValue();
//counter.decrementValue();
//counter.getValue();
//console.log(counter.Value);