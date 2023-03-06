// @app controls your application's event lifecycle
// @BrowserWindow creates and manages app windows.
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#778884',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(`file://${__dirname}/main.html`);
  // win.loadFile('main.html');

  // The reason why win.loadFile does not work for this repository is that it is an
  // Electron app packaged as a single executable file using electron-builder. When
  // an Electron app is packaged as a single executable file, the app's resources
  // (such as the HTML, CSS, and JavaScript files) are no longer located in individual
  // files on disk. Instead, they are embedded in the executable file itself as a compressed
  // archive. Therefore, the win.loadFile method cannot find the HTML file to load.
};

app.whenReady().then(() => {
  createWindow();
});
