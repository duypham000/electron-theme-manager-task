const electron = require('electron');
const ipc = electron.ipcRenderer;

const cont = document.getElementById('content');
const icon = document.getElementById('i');

cont.addEventListener('mouseover', () => {
    icon.setAttribute('fill', '#54a0ff');
});

cont.addEventListener('mouseleave', () => {
    icon.setAttribute('fill', '#10ac84');
});