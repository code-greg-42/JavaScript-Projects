// this was originally in the main.js file
// i moved it to make room for creating the slideshow

function countdown() {
    let seconds = document.getElementById("seconds").value;
    let timer = document.getElementById("timer");

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}