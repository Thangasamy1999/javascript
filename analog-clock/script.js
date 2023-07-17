const hour=document.querySelector('.hrs');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');

setInterval(rotateClock, 1000);

function rotateClock(){
    const clock = new Date();
    const s=clock.getSeconds()/60;
    const m=(s+clock.getMinutes())/60;
    const h=(m+clock.getHours())/12;
    hour.style.setProperty('--rotation',h*360);
    min.style.setProperty('--rotation',m*360);
    sec.style.setProperty('--rotation',s*360);
    
}
rotateClock();
