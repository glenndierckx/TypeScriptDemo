export class MyClass{
    doSomething(myPerson:IPerson) {
        alert("FirstName = " + myPerson.firstName + ", lastName = " + myPerson.lastName);
    }
}
export interface IPerson extends IDisplay{
    firstName: string;
    lastName: string;
}
export interface IDisplay{
    displayFormat():string;
}
export class MyList<T extends IDisplay>{
    private items: T[];
    
    constructor(){
        this.items = [];
    }
    
    add(item:T){
        this.items.push(item);
    }
    remove(item:T){
        var index = this.items.indexOf(item);
        if(index >= 0){
            this.items.splice(index, 1);
        }
    }
    displayAll(){
        for(var item of this.items){
            alert(item.displayFormat());
        }
    }
    foreach(action: (item:T) => void){
        for(var item of this.items){
            action(item);
        }
    }
}