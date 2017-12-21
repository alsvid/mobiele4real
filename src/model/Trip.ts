import { Contact } from '../model/contact';

export class Trip {
    title: string;
    description: string;
    participants: Contact[] = []

    constructor(title: string, description: string) { 
        this.title = title;
        this.description = description;
    }

    addParticipant(participant: Contact) {
        this.participants.push(participant);
    }
}
