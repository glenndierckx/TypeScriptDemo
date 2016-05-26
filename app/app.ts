import {MyClass, IPerson, MyList} from "./myclass";
let my = new MyClass();

let me:IPerson = {
    firstName: "Glenn",
    lastName: "Dierckx"
};
let list = new MyList<IPerson>();

list.add(me);

list.foreach(x => my.doSomething(x));
alert("end of list");

list.remove(me);

list.foreach(x => my.doSomething(x));
alert("end of list");
