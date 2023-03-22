import type { Item } from "./item";
import { Message } from "./message";

export class Dialog {
    private messages = new Set<Message>;
    public temporaryMessage?: String;

    constructor(public id: number, public title: string, public dateLastUpdated: Date) {}

    addNewMessage(text: string): Message {
        const newMessage = new Message(new Date(), text);
        this.messages.add(newMessage);
        this.dateLastUpdated = newMessage.date;
        return newMessage;
    };

    getMessages(): Message[] {
        return Array.from(this.messages);
    }

}

export class OpenedDialog {
    constructor(
        public item?: Item,
        public dialog?: Dialog, 
        public temporaryMessage?: string
    ) {}

    updateOpenedDialog(newDialog?: Dialog, newTemporaryMessage?: string): void {
        if (this.dialog)
        {
            this.dialog.temporaryMessage = newTemporaryMessage;
        }
        this.dialog = newDialog;
    }
}