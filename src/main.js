const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

let firstSomeTitle = {
  id: 1,
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
  ]
};
let secondSomeTitle = {
  id: 2,
  dataCreated: '',
  dateLastUpdated: '',
  title: 'Small puppy stories',
  shortPreview: 'Wan-wan',
  content: [
    {date: '', text: 'Far-far away in little house'},
    {date: '', text: 'Were a little cute puppy'}
  ]
};
let allFiles = [firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle,
  firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle, firstSomeTitle, secondSomeTitle];
let listOfTitles;
let listOfTitlesFunc = () => {
  let result = [];
  for (let i = 0; i < allFiles.length; i++)
  {
    let file = allFiles[i];
    result[i] = {id: file.id, title: file.title, shortPreview: file.shortPreview};
  }
  return result;
};



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

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  listOfTitles = listOfTitlesFunc();
};



app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (mainWindow === null) createWindow();
  });

});


ipcMain.handle('open-file', (e, id) => {
  for (let i = 0; i < allFiles.length; i++)
    {
      if (allFiles[i].id == id)
      {
        return allFiles[i];
      }
    }
  return null;
});

ipcMain.handle('get-list-of-files', () => {
  return listOfTitles;
});