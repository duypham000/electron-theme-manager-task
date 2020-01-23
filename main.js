const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require("path");
const url = require("url");
const electron = require('electron');
const AutoLaunch = require("auto-launch");
const ipc = electron.ipcMain;

// auto start

// let autoLaunch = new AutoLaunch({
//     name: 'clock',
//     path: app.getPath('exe'),
// });
// autoLaunch.isEnabled().then((isEnabled) => {
//     if (!isEnabled) autoLaunch.enable();
// });

function main() {
    icon();
    miniMenu();

    // test();
    manager();

    notify()
}

function notify() {


    let win = new BrowserWindow(
        {
            skipTaskbar: true,
            alwaysOnTop: true,
            width: 220,
            height: 235,
            x: 1141,
            y: 445,
            frame: false,
            transparent: true,
            resizable: false,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './UI/notify/index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.on('closed', () => {
        win = null;
    })

    globalShortcut.register('Enter', () => {
        console.log(win.getPosition());
    })
}

function test() {
    let win = new BrowserWindow(
        {
            skipTaskbar: false,
            transparent: true,
            resizable: false,
            show: true,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './UI/testting/test.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('close', event => {
        win = null
    })
    win.webContents.openDevTools();

    const ipc = electron.ipcMain;
    const dl = electron.dialog;

    // listen
    // arg là data
    ipc.on('test', (e, arg) => {

        //do something
        dl.showErrorBox('oh shit!', arg);

        // send(chanel, [data])
        // data có thể không điền
        e.sender.send('rep', 'send successed!')
    })

}

function miniMenu() {

    let win = new BrowserWindow(
        {
            skipTaskbar: true,
            alwaysOnTop: true,
            width: 306,
            height: 349,
            frame: false,
            transparent: true,
            resizable: false,
            show: false,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './UI/miniMenu/index.html'),
        protocol: 'file',
        slashes: true
    }));



    win.on('close', event => {
        event.preventDefault();
        win.hide();
    })



    var current;
    ipc.on('current', (e, data) => {
        current = data;
    })



    var menu = [];
    ipc.on('ready', (e, data) => {
        menu = data;
    })


    globalShortcut.register('CommandOrControl+5', () => {
        win.show();


        globalShortcut.register('Left', () => {
            win.webContents.send('remote', 'pre');
        });

        globalShortcut.register('Right', () => {
            win.webContents.send('remote', 'next');
        });

        globalShortcut.register('Down', () => {
            win.webContents.send('remote', 'exit');
        });

        globalShortcut.register('Up', () => {
            win.webContents.send('remote', 'next');
        });

        globalShortcut.register('Enter', () => {
            console.log(current);
        })
    });


    globalShortcut.register('Esc', () => {
        win.hide();
        globalShortcut.unregister('Up');
        globalShortcut.unregister('Left');
        globalShortcut.unregister('Down');
        globalShortcut.unregister('Right');
        globalShortcut.unregister('Enter');
    });
}

var done = true;
var current = null;

function icon() {


    let win = new BrowserWindow(
        {
            skipTaskbar: true,
            alwaysOnTop: true,
            width: 40,
            height: 40,
            x: 1321,
            y: 666,
            frame: false,
            transparent: true,
            resizable: false,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './UI/shortcut/index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.on('closed', () => {
        win = null;
    })

    // globalShortcut.register('Enter', () => {
    //     let pos = win.getPosition();
    //     console.log(pos);
    // })

    win.setIgnoreMouseEvents(true)
}


function clockstart() {

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
        pathname: path.join(__dirname, './UI/clock/index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.on('closed', () => {
        win = null;
    })
}

function manager() {

    let win = new BrowserWindow(
        {
            skipTaskbar: false,
            transparent: true,
            resizable: false,
            show: true,
            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

    win.loadURL(url.format({
        pathname: path.join(__dirname, './UI/manager/index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('close', event => {
        win = null
    })
    // win.webContents.openDevTools();


}




app.on('ready', main);

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})

