import { Dialog, Item } from "@/background/entities";
import { loadTestDialogs } from "@/background/helpers"

class DialogsManager {
    private dialogsMap = new DialogsMap();
    private itemsMap = new Map<Number, Item>;

    constructor() {
        this.dialogsMap = loadTestDialogs();

        for (let dialog of this.dialogsMap.values())
        {
            const newItem = new Item(dialog.id, dialog.title);
            const lastMessage = dialog.getLastMessage();
            if (lastMessage)
            {
                newItem.setNewPreview(lastMessage.text);
            }
            this.itemsMap.set(newItem.id, newItem);
        }
    }

    getDialog(id: number): Dialog {
        return this.dialogsMap.get(id);
    }

    createDialog (title: string): Dialog {
        const lastDialog = this.dialogsMap.last;
        const newDialog = new Dialog(lastDialog ? lastDialog.id + 1 : 1, title);
        this.dialogsMap.setNew(newDialog.id, newDialog);
        this.itemsMap.set(newDialog.id, new Item(newDialog.id, newDialog.title));
        return newDialog;
    }

    getDialogsList(): Item[] {
        return Array.from(this.itemsMap.values()).sort((a, b) => 
          parseFloat(a.dateLastUpdated.toTimeString()) - parseFloat(b.dateLastUpdated.toTimeString()))
    }

    addNewMessage(id: number, text: string): void {
        const dialog = this.dialogsMap.get(id)
        if (!dialog)
        {
            return;
        }
        dialog.addNewMessage(text);
        this.itemsMap.get(id)?.setNewPreview(text);
    }
}

export class DialogsMap extends Map {
    public last: Dialog | null | undefined;

    setNew(id: number, dialog: Dialog): void {
        super.set(id, dialog);
        this.last = dialog;
    }
}

let dialogManager: DialogsManager;

export function useDialogsManager(): DialogsManager {
    if (!dialogManager)
    {
        dialogManager = new DialogsManager();
    }
    return dialogManager;
}