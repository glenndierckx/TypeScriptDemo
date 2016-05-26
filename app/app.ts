import {MyClass, IPerson} from "./myclass";
let my = new MyClass();

let me:IPerson = {
    firstName: "Glenn",
    lastName: "Dierckx"
};

my.doSomething(me);
