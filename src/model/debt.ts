export class Debt {

    tripTitle: string;
    person: string;
    description: string;
    amount: number;
    currency: string;
    paid: boolean;

    constructor(_tripTitle: string, _person: string, _description: string, _amount: number, _currency: string, _paid: boolean) {
        this.tripTitle = _tripTitle;
        this.person = _person;
        this.description = _description;
        this.amount = _amount;
        this.currency = _currency;
        this.paid = _paid;
    }
}

