class Customer {
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    firstName: string;
    lastName: string;
}

let myCustomer = new Customer("Salih", "Dürüs");

// myCustomer.firstName = "Salih";
// myCustomer.lastName = "Dürüs";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
