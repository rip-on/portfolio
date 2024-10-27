const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let is_running = false;

function start(){
    if(!is_running){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        is_running = true;
    }
}
function stop(){
    if(is_running){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        is_running = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    is_running = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60*60));
    let seconds = Math.floor(elapsedTime/1000%60);
    let miliseconds = Math.floor(elapsedTime%1000/10);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");
    display.textContent = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
}