const { app, BrowserWindow } = require('electron');
const path = require("path");
const url = require("url");
const AutoLaunch = require("auto-launch");

function createWindow() {

    // let autoLaunch = new AutoLaunch({
    //     name: 'clock',
    //     path: app.getPath('exe'),
    // });
    // autoLaunch.isEnabled().then((isEnabled) => {
    //     if (!isEnabled) autoLaunch.enable();
    // });

    let win = new BrowserWindow(
        {
            skipTaskbar: false,
            alwaysOnTop: true,
            width: 153,
            height: 45,
            x: 1210,
            y: 650,
            frame: false,
            transparent: true
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './clock/index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})
