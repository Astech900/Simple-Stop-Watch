let hourEl = document.getElementById("hour");
let minusEl = document.getElementById("minut");
let secondEl = document.getElementById("second");

let playBtn = document.getElementById('play-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');
let timer = null;
let [s,m,h] = [0,0,0];




playBtn.addEventListener('click',()=>{
   timer = setInterval(getTimes,1000);
} )

pauseBtn.addEventListener('click',()=>{
    clearInterval(timer);
})
resetBtn.addEventListener('click',()=>{
    resetWatch();
})



function resetWatch(){
    clearInterval(timer);
    s = 0;
   m = 0;
   h = 0;
    secondEl.innerHTML = "00";
    minusEl.innerHTML = "00:";
    hourEl.innerHTML = "00:" 

}


function getTimes(){

    s++;

    s = (s < 10) ? "0" + s : s;

    secondEl.innerHTML = s;
    
    if(s >= 60){
        s = 0;
        m++;
        m = (m < 10) ? "0" + m : m;
        minusEl.innerHTML = `${m}:`;
        if(m >= 59){
            m = 0;
            h++;
            h = (h < 10) ? "0" + h : h;
            hourEl.innerHTML = `${h}:`;
        }
    }
  
  

}



