var timer = 60
var score = 0
var hitNum
function createBubble() {
    var contain = ""
    for (var i = 0; i <= 174; i++) {
        var rn = Math.floor(Math.random() * 10)
        contain += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#bottom-panel").innerHTML = contain
}

function runTimer() {

    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#timerval").textContent = timer
        }
        else {
            clearInterval(timerint)
            document.querySelector("#bottom-panel").innerHTML = `<h1>Game Over !<br> Your Score: ${score}</h1>`
        }
    }, 1000)
}

function getNewHit() {
    hitNum = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitNum
}

function increaseScore() {
    score += 10
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#bottom-panel")
    .addEventListener("click", function (dets) {
        var clickedNum = dets.target.textContent
        if (clickedNum == hitNum) {
            increaseScore()
            createBubble()
            getNewHit()
        }
    })
document.querySelector("#start-btn")
    .addEventListener("click", function (dets) {
        createBubble()
        runTimer()
        getNewHit()
    })
