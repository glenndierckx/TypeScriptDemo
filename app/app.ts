import {MyClass, IPerson, MyList} from "./myclass";
let my = new MyClass();

let me:IPerson = {
    firstName: "Glenn",
    lastName: "Dierckx",
    displayFormat: () => "Glenn Dierckx"
};
let list = new MyList<IPerson>();

list.add(me);

list.displayAll();
