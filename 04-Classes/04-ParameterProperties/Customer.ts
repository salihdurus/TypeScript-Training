class Customer {
    constructor(private _firstName: string, private _lastName: string) {}

    public get firstName(): string {
        return this._firstName;
    }


    public set firstName(v: string) {
        this._firstName = v;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

let myCustomer = new Customer("Salih", "Dürüs");

// myCustomer.firstName = "Salih";
// myCustomer.lastName = "Dürüs";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
