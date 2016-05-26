import {IPerson, MyList} from "./myclass";
let me:IPerson = {
    firstName: "Glenn",
    lastName: "Dierckx",
    displayFormat: () => "Glenn Dierckx"
};
let list = new MyList<IPerson>();

list.add(me);

list.displayAll();
