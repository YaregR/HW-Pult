
let increaseBrightBtn = document.querySelector('.increaseBright');
let decreaseBrightBtn = document.querySelector('.decreaseBright');
let increaseTempBtn = document.querySelector('.increaseTemp');
let decreaseTempBtn = document.querySelector('.decreaseTemp');
let resBright = document.querySelector('.resBright span');
let resTemp = document.querySelector('.resTemp span');

let valBright = 0;
let valTemp = 2500;
    
increaseBrightBtn.addEventListener('click', (ev) => {
    
    if (valBright>=0 && valBright<=95) {
        valBright+=5;    
    };    
    resBright.innerHTML = valBright;
    
});

decreaseBrightBtn.addEventListener('click', (ev) => {
    
    if (valBright>=5 && valBright<=100) {
        valBright-=5;    
    };   
    resBright.innerHTML = valBright;
    
});

increaseTempBtn.addEventListener('click', (ev) => {
    
    if (valTemp>=2500 && valTemp<=6400) {
        valTemp+=100;    
    };
    resTemp.innerHTML = valTemp;
    
});

decreaseTempBtn.addEventListener('click', (ev) => {
    
    if (valTemp>=2600 && valTemp<=6500) {
        valTemp-=100;    
    };
    resTemp.innerHTML = valTemp;
    
});