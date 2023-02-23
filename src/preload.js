const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'filesApi', {
    openFile: async (title) => await ipcRenderer.invoke('open-file', title),
    getListOfFiles: async () => await ipcRenderer.invoke('get-list-of-files'),
    addNewFile: async (title) => await ipcRenderer.invoke('add-new-file', title),
    addTextIntoFile: async (title, text) => await ipcRenderer.invoke('add-text-into-file', title, text),
    on: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(event, ...args))

  }
);