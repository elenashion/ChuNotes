import type { Dialog, Item } from '@/background/entities';


export interface API {
    openDialog(id: number): Promise<Dialog>;
    getListOfDialogs(): Promise<Item[]>,
    addNewDialog(title: string): Promise<Dialog>,
    addMessage(dialogId: number, text: string): Promise<void>
}


interface ExtendedWindow extends Window {
    chuNotesAPI: API;
}
  
function getWindowObject(): ExtendedWindow {
    return window as unknown as ExtendedWindow;
}

export const api: API = getWindowObject().chuNotesAPI;

export default api;
