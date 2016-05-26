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
            $("body").append("<div>" + item.displayFormat() + "</div>")
        }
    }
    foreach(action: (item:T) => void){
        for(var item of this.items){
            action(item);
        }
    }
}