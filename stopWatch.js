let start = document.getElementById("start"),
    stopp = document.getElementById("stop"),
    round = document.getElementById("round"),
    coun = document.getElementById("coun"),
    counter0 = document.getElementById("counter0"),
    counter1 = document.getElementById("counter1"),
    counter2 = document.getElementById("counter2"),
    rnd = document.getElementById('rnd'),
    date = document.getElementById('date'),
    art = document.getElementById('art'),
    tab = document.getElementById('tab'),
    tabNum = 0,
    hr = 0,
    min = 0,
    sec = 0,
    timerHr,
    timerMin,
    timerSec;
setInterval(function () { date.innerHTML = new Date().toLocaleString() }, 1000);

start.onclick = function () {
    clearInterval(timerHr);
    clearInterval(timerMin);
    clearInterval(timerSec);
    timerHr = setInterval(myMin, 60000);
    timerMin = setInterval(mySec, 1000);
    timerSec = setInterval(myMilSec, 100);
}
function myMin() {
    hr += 1;
    if (hr <= 9) {
        counter0.innerHTML = '0' + hr + ':';
    } else {
        counter0.innerHTML = hr + ':';
    }
    coun.classList.remove("counOpac")
}

function mySec() {
    min += 1;
    if (min <= 9) {
        counter1.innerHTML = '0' + min;
    } else {
        counter1.innerHTML = min;
    }
    if (min === 60) {
        min = 0
        counter0.style.removeProperty('display');
        
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
    clearInterval(timerHr);
    clearInterval(timerMin);
    clearInterval(timerSec);
    coun.classList.add("counOpac")
}

round.onclick = function () {
    tab.style.removeProperty('display');
    tabNum++
    rnd.innerHTML = min + ':' + '0' + sec;
    if (hr != 0) {
        rnd.innerHTML = hr + ':' + min + ':' + '0' + sec;
    }
    if (sec == 10) {
        rnd.innerHTML = min + ':' + '0' + sec;
        if (hr != 0) {
            rnd.innerHTML = hr + ':' + min + ':' + '0' + sec;
        }
    }
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td.innerHTML = tabNum;
    td2.innerHTML = hr + ':' + min + ':' + '0' + sec;
    if (sec == 10) {
        td2.innerHTML = hr + ':' + min + ':' + sec;
    }
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    td3.innerHTML = time;
    tab.appendChild(tr);

    art.classList.add("rndAnim");
    if (art.className == 'rndAnim') {
        setTimeout(() => {
            art.classList.remove('rndAnim')
        }, 1000);
    }
}




