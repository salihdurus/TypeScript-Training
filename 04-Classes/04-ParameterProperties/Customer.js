"use strict";
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
