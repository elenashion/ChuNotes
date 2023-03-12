import { Message } from "./message";

export class Dialog {
    constructor(public id: number, public title: string, public dateLastUpdated: Date,
        public temporaryMessage: string, public messages: Message[]) {}

    addNewMessage(text: string): Message {
        const newMessage = new Message(new Date(), text);
        this.messages.push(newMessage);
        this.dateLastUpdated = newMessage.date;
        return newMessage;
    };

}