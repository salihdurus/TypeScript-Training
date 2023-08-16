"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(v) {
        this._firstName = v;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Salih", "Dürüs");
// myCustomer.firstName = "Salih";
// myCustomer.lastName = "Dürüs";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
