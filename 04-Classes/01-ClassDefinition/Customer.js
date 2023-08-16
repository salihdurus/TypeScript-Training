var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Salih", "Dürüs");
// myCustomer.firstName = "Salih";
// myCustomer.lastName = "Dürüs";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
