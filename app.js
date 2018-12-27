const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

target = url.format({
  pathname: path.join(__dirname, 'dist/index.html'),
  protocol: 'file:',
  slashes: true,
})

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { webSecurity: false }
  })
  window.loadURL(target)

  // Open the DevTools.
  window.webContents.openDevTools()
  console.log(target)

  // Emitted when the window is closed.
  window.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    window = null
  })
})
