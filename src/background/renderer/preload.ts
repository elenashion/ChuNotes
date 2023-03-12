import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld(
  'filesApi', {
    openFile: async (id: number) => await ipcRenderer.invoke('open-file', id),
    getListOfFiles: async () => await ipcRenderer.invoke('get-list-of-files'),
    addNewFile: async (id: number) => await ipcRenderer.invoke('add-new-file', id),
    addTextIntoFile: async (id: number, text: string) => await ipcRenderer.invoke('add-text-into-file', id, text),

  }
);