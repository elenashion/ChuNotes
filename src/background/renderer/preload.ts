import { contextBridge, ipcRenderer } from 'electron';
import type { API } from "./ipc/api";
import type { Dialog, Item } from '../entities';
import { Background } from './ipc/channel';

const api: API = {
  async openDialog(id: number): Promise<Dialog> {
    return await ipcRenderer.invoke(Background.OPEN_DIALOG, id);
  },
  async getListOfDialogs(): Promise<Item[]> {
    return await ipcRenderer.invoke(Background.GET_LIST_OF_DIALOGS);
  },
  async addNewDialog(title: string): Promise<Dialog> {
    return await ipcRenderer.invoke(Background.ADD_NEW_DIALOG, title);
  },
  async addMessage(dialogId: number, text: string): Promise<void> {
    ipcRenderer.invoke(Background.ADD_MESSAGE, dialogId, text);
  },
}

contextBridge.exposeInMainWorld("chuNotesAPI", api);
