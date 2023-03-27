let start = document.getElementById("start"),
    stopp = document.getElementById("stop"),
    round = document.getElementById("round"),
    reset = document.getElementById("reset"),
    coun = document.getElementById("coun"),
    counter1 = document.getElementById("counter1"),
    counter2 = document.getElementById("counter2"),
    rnd = document.getElementById('rnd'),
    date = document.getElementById('date'),
    art = document.getElementById('art'),
    min = 00,
    sec = 00,
    timerMin,
    timerSec;


setInterval(function () { date.innerHTML = new Date().toLocaleString() }, 1000);

start.onclick = function () {
    clearInterval(timerMin);
    clearInterval(timerSec);
    timerMin = setInterval(mySec, 1000);
    timerSec = setInterval(myMilSec, 100);
}
function mySec() {
    min += 1;
    if (min <= 9) {
        counter1.innerHTML = '0' + min;
    } else {
        counter1.innerHTML = min;
    }
    coun.classList.remove("counOpac")
}
function myMilSec() {
    sec += 1;
    counter2.innerHTML = '0' + sec;
    if (sec == 10) {
        counter2.innerHTML = sec;
    }
    if (sec === 10) {
        sec = 0
    }
}

stopp.onclick = function () {
    clearInterval(timerMin);
    clearInterval(timerSec);
    coun.classList.add("counOpac")
}

round.onclick = function () {
    rnd.innerHTML = min + ':' + '0' + sec;
    if (sec == 10) {
        rnd.innerHTML = min + ':' + sec;
    }
    art.classList.add("rndAnim");
    if (art.className == 'rndAnim') {
        setTimeout(() => {
            art.classList.remove('rndAnim')
        }, 1000);
    }
}

reset.onclick = function () {
    min = 0;
    sec = 0;
    counter1.innerHTML = min;
    counter2.innerHTML = sec;
    clearInterval(timerMin);
    clearInterval(timerSec);
    coun.classList.remove("counOpac")
}

