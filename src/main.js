// @app controls your application's event lifecycle
// @BrowserWindow creates and manages app windows.
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#1F000E',
    width: 800,
    height: 600
  });

  win.loadFile('main.html');
};

app.whenReady().then(() => {
  createWindow();
});
