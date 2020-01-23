const electron = require('electron');
const ipc = electron.ipcRenderer;

const title = document.getElementsByClassName('chart-title')[0];
const cont = document.getElementsByClassName('chart-label')[0];
const choose = document.getElementsByClassName('donut-segment');


var current = null;

function change(key) {
    if (key == 'next') {
        current++;
    }
    else if (key == 'pre') {
        current--;
    }

    else if (key == 'exit') {
        current = null;
        title.innerHTML = 'Exit';
        cont.innerHTML = 'nhấn Esc';
        ipc.send('current', null);
    }


    for (let i = 0; i < choose.length; i++) {
        choose[i].style.opacity = 0.1
    }

    if (current != null) {
        if (current >= choose.length)
            current = 0
        if (current < 0)
            current = choose.length - 1
        choose[current].style.opacity = 1;
        title.innerHTML = choose[current].getAttribute('tit');
        cont.innerHTML = choose[current].getAttribute('con');

        ipc.send('current', choose[current].getAttribute('des'));
    }

}

var menu = [];
for (let i = 0; i < choose.length; i++) {
    menu.push(choose[i].getAttribute('des'));
}
ipc.send('ready', menu);

ipc.on('remote', (e, data) => {
    change(data);
});