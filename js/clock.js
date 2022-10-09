const clockTag = document.querySelector('.clock');

function clockTime(){
    const date = new Date();
    const hr = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clockTag.innerHTML = `${hr} : ${min} : ${sec}`;
}

setInterval(clockTime, 1000);