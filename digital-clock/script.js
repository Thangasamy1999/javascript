const clock=document.querySelector('.clock');
function runClock(){
    var time = new Date();
    var hrs= time.getHours();
    var mins= time.getMinutes();
    var secs= time.getSeconds();
    var txt= "PM";
    if(hrs>12){
        hrs=hrs-12;
        txt= "AM";
    }else if(hrs==12){
        hrs=hrs-12;
        txt= "PM";
    }
    hrs=hrs<10?'0'+hrs:hrs;
    mins=mins<10?'0'+mins:mins;
    secs=secs<10?'0'+secs:secs;

    //clock.innerHTML=`${hrs} : ${mins} : ${secs} ${txt}`;

 const h=document.querySelectorAll('.h');
    const m=document.querySelectorAll('.m');
    const s=document.querySelectorAll('.s');
    
    hrs=hrs.toString();
    h[0].innerHTML=hrs[0];
    h[1].innerHTML=hrs[1];
    mins=mins.toString();
    m[0].innerHTML=mins[0];
    m[1].innerHTML=mins[1];
    secs=secs.toString();
    s[0].innerHTML=secs[0];
    s[1].innerHTML=secs[1];
    
    
}
runClock();
setInterval(runClock, 1000);