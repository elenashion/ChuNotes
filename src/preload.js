const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'filesApi', {
    openFile: async (id) => await ipcRenderer.invoke('open-file', id),
    getListOfFiles: async () => await ipcRenderer.invoke('get-list-of-files'),
    on: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(event, ...args))

  }
);