const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

const allFilesMap = new Map();
const listOfTitles = [];


async function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    width: 1024,
    height: 800,
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  fillTestData();
};



app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (mainWindow === null) createWindow();
  });

});


async function addNewFile (title) {
  //
}


async function addTextIntoFile (title, text) {
  let file = allFilesMap.get(title);
  if (file == null)
  {
    return;
  }
  file.content.push({date: Date.now(), text: text});
  return file;
}


ipcMain.handle('open-file', (e, title) => {
  return allFilesMap.get(title);
});

ipcMain.handle('get-list-of-files', () => {
  return listOfTitles;
});

ipcMain.handle('add-new-file', (e, title) => {
  return addNewFile(title);
});

ipcMain.handle('add-text-into-file', (e, title, text) => {
  return addTextIntoFile(title, text);
});


async function fillTestData () {
  let firstSomeTitle = {
    dataCreated: '',
    dateLastUpdated: '',
    title: 'SomeTitle1',
    shortPreview: 'Short preview',
    content: [
      {date: '', text: 'Some text to test this function'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 2 Some text to test this function 2' +
       'Some text to test this function 2 Some text to test this function 2 Some text to test this function' +
       '2 Some text to test this function 2 Some text to test this function 2 Some text to test this function 2'},
      {date: '', text: 'Some text to test this function 3'}
    ],
    temporaryMessage: 'I just starting'
  };
  let secondSomeTitle = {
    dataCreated: '',
    dateLastUpdated: '',
    title: 'Small puppy stories',
    shortPreview: 'Wan-wan',
    content: [
      {date: '', text: 'Far-far away in little house'},
      {date: '', text: 'Were a little cute puppy'}
    ],
    temporaryMessage: ''
  };

  allFilesMap.set(firstSomeTitle.title, firstSomeTitle);
  allFilesMap.set(secondSomeTitle.title, secondSomeTitle);
  allFilesMap.set('SomeTitle3', firstSomeTitle);
  allFilesMap.set('SomeTitle4', secondSomeTitle);
  allFilesMap.set('SomeTitle5', firstSomeTitle);
  allFilesMap.set('SomeTitle6', secondSomeTitle);
  allFilesMap.set('SomeTitle7', firstSomeTitle);
  allFilesMap.set('SomeTitle8', secondSomeTitle);
  allFilesMap.set('SomeTitle9', firstSomeTitle);
  allFilesMap.set('SomeTitle10', secondSomeTitle);
  allFilesMap.set('SomeTitle11', firstSomeTitle);
  allFilesMap.set('SomeTitle12', secondSomeTitle);
  allFilesMap.set('SomeTitle13', firstSomeTitle);
  allFilesMap.set('SomeTitle14', secondSomeTitle);
  allFilesMap.set('SomeTitle15', firstSomeTitle);
  allFilesMap.set('SomeTitle16', secondSomeTitle);

  for (let file of allFilesMap.values())
  {
    listOfTitles.push({title: file.title, shortPreview: file.shortPreview});
  }
}
