"use strict";

import { app, protocol, BrowserWindow } from "electron";
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

const isDev = process.env.npm_lifecycle_event === "electron:serve";

async function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'renderer/preload.js')
    },
    width: 1024,
    height: 800,
  });

  mainWindow.loadURL(
    isDev ?
    "http://localhost:3000" :
    path.join(__dirname, 'index.html')
    );
  
  mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  return mainWindow;
};

  
app.whenReady().then(() => {
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

export default {};