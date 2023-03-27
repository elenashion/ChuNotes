import type { Item } from "./item";
import { Message } from "./message";

export class Dialog {
    private messages = new MessagesSet();
    private dateLastUpdated = new Date();
    public temporaryMessage: String = "";

    constructor(public id: number, public title: string) {}

    addNewMessage(text: string): Message {
        const lastUpdated = new Date();
        const newMessage = new Message(lastUpdated, text);
        this.messages.addNew(newMessage);
        this.dateLastUpdated = lastUpdated;
        return newMessage;
    };

    getMessages(): Message[] {
        return Array.from(this.messages);
    };

    getLastMessage(): Message | null | undefined {
        return this.messages.last;
    };

}

class MessagesSet extends Set {
    public last: Message | null | undefined;
    
    addNew(value: Message): void {
        super.add(value);
        this.last = value;
    };
}

export class OpenedDialog {
    constructor(
        public item?: Item,
        public dialog?: Dialog,
    ) {}

    updateOpenedDialog(newDialog?: Dialog): void {
        this.dialog = newDialog;
    };
}