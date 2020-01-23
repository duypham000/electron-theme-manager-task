var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');

var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');

var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');

function off(ele, a = []) {
    a.forEach(e => {
        ele.getElementsByClassName(e)[0].setAttribute('class', e + ' st0');
    });
}

function change(ele, t) {
    var a = ['t1', 't2', 'n1', 'n2', 'n3', 'p1', 'p2'];
    a.forEach(e => {
        ele.getElementsByClassName(e)[0].setAttribute('class', e + ' st1');
    });
    if (t == 0)
        off(ele, ['n2']);
    if (t == 1)
        off(ele, ['t1', 't2', 'n1', 'n2', 'n3']);
    if (t == 2)
        off(ele, ['t1', 'p2']);
    if (t == 3)
        off(ele, ['t1', 't2']);
    if (t == 4)
        off(ele, ['n1', 't2', 'n3']);
    if (t == 5)
        off(ele, ['t2', 'p1']);
    if (t == 6)
        off(ele, ['p1']);
    if (t == 7)
        off(ele, ['t1', 't2', 'n2', 'n3']);
    if (t == 8)
        off(ele, []);
    if (t == 9)
        off(ele, ['t2']);
}

function showtime(st, nd, time) {
    if (time < 10) {
        change(st, 0);
        change(nd, time);
    } else {
        change(st, parseInt(time / 10));
        change(nd, time % 10);
    }
}
setInterval(() => {
    let t = new Date();
    showtime(this.h1, this.h2, t.getHours());
    showtime(this.m1, this.m2, t.getMinutes());
    showtime(this.s1, this.s2, t.getSeconds());
}, 100);

