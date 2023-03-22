import { Dialog } from "@/background/entities";

export class DialogsManager {
    private dialogs = new Map<Number, Dialog>;

    constructor() {
    }

    createDialog (title: string) {
        const newDialog = new Dialog(0, title, new Date());
    }
}