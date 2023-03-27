import { Background } from "./channel"
import { ipcMain } from "electron";
import { useDialogsManager } from "@/front/renderer/store/dialog"
import type { BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

export function setup(win: BrowserWindow): void {
  mainWindow = win;
}

ipcMain.handle(Background.OPEN_DIALOG, (e, id: number) => {
    return useDialogsManager().getDialog(id);
});
  
ipcMain.handle(Background.GET_LIST_OF_DIALOGS, () => {
    return useDialogsManager().getDialogsList();
});
  
ipcMain.handle(Background.ADD_NEW_DIALOG, (e, title: string) => {
    return useDialogsManager().createDialog(title);
});
  
ipcMain.handle(Background.ADD_MESSAGE, (e, id: number, text: string) => {
  useDialogsManager().addNewMessage(id, text);
});