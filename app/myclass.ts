export class MyClass{
    doSomething(myPerson:IPerson) {
        alert("FirstName = " + myPerson.firstName + ", lastName = " + myPerson.lastName);
    }
}
export interface IPerson{
    firstName: string;
    lastName: string;
}