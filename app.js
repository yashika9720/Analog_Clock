const hr = document.querySelector('.hr');
const min = document.querySelector('.mn');
const sec = document.querySelector('.sc');

setInterval(()=>{
    const date = new Date();
    const h = date.getHours() * 30;
    const m = date.getMinutes() * 6;
    const s = date.getSeconds() * 6;
    hr.style.transform = `rotate(${h+(m/12)}deg)`;  
    min.style.transform = `rotate(${m}deg)`;  
    sec.style.transform = `rotate(${s}deg)`;  
}, 1000);