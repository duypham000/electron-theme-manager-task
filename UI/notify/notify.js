const msg = document.getElementsByClassName('ntf-msg');
var t = 0;
for (let i = 0; i < msg.length; i++) {
    const e = msg[i];

    e.setAttribute('ct', i);
    e.style.top = t + 'px';
    t += 60;

    e.addEventListener('click', () => {
        var curent = 0;
        if (e.classList.contains('m-active')) {
            close(e)
            curent = (e.getAttribute('ct'));
            for (let i = parseInt(curent) + 1; i < msg.length; i++) {
                const e = msg[i];
                e.style.top = parseInt(e.style.top) - 110 + 'px';
            }
        } else {
            active(e);
            curent = (e.getAttribute('ct'));
            for (let i = parseInt(curent) + 1; i < msg.length; i++) {
                const e = msg[i];
                e.style.top = parseInt(e.style.top) + 110 + 'px';
            }
        }

    });
}

function active(e) {
    setTimeout(() => {
        e.getElementsByClassName('msg-back')[0].setAttribute("viewBox", "0 0 700 500");
    }, 20);
    e.classList.add("m-active");
    e.getElementsByClassName('msg-back')[0].classList.add("svg-active");
    e.getElementsByClassName('cls-1')[0].classList.add("b-active");
    e.getElementsByClassName('title')[0].classList.add("tit-active");
    e.getElementsByClassName('text')[0].classList.add("t-active");
}

function close(e) {
    e.getElementsByClassName('msg-back')[0].setAttribute("viewBox", "0 0 700 200");
    e.classList.remove("m-active");
    e.getElementsByClassName('msg-back')[0].classList.remove("svg-active");
    e.getElementsByClassName('cls-1')[0].classList.remove("b-active");
    e.getElementsByClassName('title')[0].classList.remove("tit-active");
    e.getElementsByClassName('text')[0].classList.remove("t-active");
}
