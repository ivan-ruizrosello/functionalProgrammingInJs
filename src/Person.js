class Person {
    constructor(firstname, lastname, ssn) {
        // this._firstname = firstname;
        // this._lastname = lastname;
        // this._ssn = ssn;
        // this._address = null;
        // this._birthYear = null;

        this.firstname = firstname;
        this.lastname = lastname;
        this.ssn = ssn;
        this.address = null;
        this.birthYear = null;
    }

    get fullname () { 
        return `${this.firstname} ${this.lastname}`;
    }

    // get ssn() {
    //     return this._ssn;
    // }

    // get firstname() {
       
    //     return this._firstname;
    // }
    // get lastname() {
    //     return this._lastname;
    // }

    // get address() {
    //     return this._address;
    // }

    // get birthYear() {
    //     return this._birthYear;
    // }

    // set birthYear(year) {
    //     this._birthYear = year;
    // }

    // set address(addr){
    //     this._address = addr;
    // }

    // set lastName(ln) {
    //     this._lastname = ln;
    // }

    toString() {
        return `Person(${this._firstname}, ${this._lastname})`;
    }
}

class Student extends Person {
    constructor(firstname, lastname, ssn, school) {
        super(firstname, lastname, ssn);
        this._school = school;
    }

    get school() {
        return this._school;
    }
}

class ZipCode {
    constructor(code, location) {
        this._code = code;
        this._location = location;
    }

    get code () {
        return this._code;  
    }

    get location () { 
        return this._location;
    }
}

class Address {
    constructor(country, state, city, zip, street) {
        // this._country = country;
        // this._state = state;
        // this._city = city;
        // this._zip = zip;
        // this._street = street;

        this.country = country;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }

    // get street() {
    //     return this._street;
    // }

    // get city() {
    //     return this._city;
    // }
    
    // get state() {
    //     return this._state;
    // }

    // get zip() {
    //     return this._zip;
    // }

    // get country() {
    //     return this._country;
    // }
}

module.exports = { Person, Student, Address, ZipCode };

