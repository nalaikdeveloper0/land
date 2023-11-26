function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 98; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
    var timer = 60;
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval("timerint");
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over & Your score is ${score}</h1>`
        }
    }, 1000);
}
var rn;
function getnewhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#gethit").textContent = rn;
}

var score = 0;
function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === rn) {
        increasescore();
        makeBubble();
        getnewhit();
    }
})

getnewhit();
runtimer();
makeBubble();