function createSnow(){

    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random()*innerWidth+'px';

    container.appendChild(span);

    setTimeout(()=>{
        span.remove();
    },5000)

}

setInterval(createSnow,100);

let countDate = new Date('jul 1,2022 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let seconds = 1000;
    let minute = seconds*60;
    let hour = minute*60;
    let days = hour*24;

    let d = Math.floor(gap/(days));
    let h = Math.floor((gap%(days))/(hour));
    let m = Math.floor((gap%(hour))/(minute));
    let s = Math.floor((gap%(minute))/(seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown();
},1000)