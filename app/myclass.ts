export class MyClass{
    doSomething(myPerson:IPerson) {
        alert("FirstName = " + myPerson.firstName + ", lastName = " + myPerson.lastName);
    }
}
export interface IPerson{
    firstName: string;
    lastName: string;
}

export class MyList<T>{
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
    foreach(action: (item:T) => void){
        for(var item of this.items){
            action(item);
        }
    }
}