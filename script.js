const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


function countdown() {
    const today = new Date();
    const days = today.getDate(); //날짜
    const hours = today.getHours(); //시간
    const mins = today.getMinutes(); //분
    const seconds = today.getSeconds(); // 초

    //console.log(year + '년' + month + '월' + date + '일' + hours + '시' + minutes + '분' + seconds + '초');

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);

