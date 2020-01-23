const electron = require('electron');
const fs = require('fs');
const path = require('path');

const content = document.getElementById('content');

// tạo đường dẫn
let pathName = path.join(__dirname, 'Files')

document.getElementById('btn').addEventListener('click', () => {
    // tên file
    var name = 'mo';
    // link file
    let file = path.join(pathName, name);

    // tạo
    fs.appendFile(file, 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    // sửa
    fs.writeFile(file, 'klasjdkashdjk', (err) => {
        if (err) {
            console.log('ERR: ' + err);
        }
        else console.log('successed!');
    })
    // đọc
    fs.readFile(file, (err, data) => {
        content.innerText = data;
    })

})