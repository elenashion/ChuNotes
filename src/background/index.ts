"use strict";

import { app, protocol, BrowserWindow } from "electron";
import path from 'path';
import { setup } from "./renderer/ipc/ipc";

let mainWindow: BrowserWindow | null = null;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

const isDev = process.env.npm_lifecycle_event === "electron:serve";

async function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'renderer/preload.js')
    },
    width: 1024,
    height: 800,
  });

  mainWindow.loadURL("http://localhost:5173");

  // mainWindow.loadFile(
  //   path.join(__dirname, '../../../index.html')
  // );

  setup(mainWindow);
  
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  return mainWindow;
};

async function installElectronDevtools() {
  const installer = await import("electron-devtools-installer");
  await installer.default(installer.VUEJS3_DEVTOOLS);
}

app.whenReady().then(() => {
  if (isDev)
  {
    installElectronDevtools();
  }
    createWindow();
  
    app.on('activate', function () {
      if (mainWindow === null) createWindow();
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});

