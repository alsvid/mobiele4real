export class Contact {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {

    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
