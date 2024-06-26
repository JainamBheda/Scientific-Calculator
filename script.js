let string="";
let lastResult = '';
let memory = 0;
let angleMode = 'deg'; 
let baseValue = null;
function dis(val){
    const display=document.getElementById('result');
    display.value += val
}
function slove() {
    const display = document.getElementById('result');
    let x = display.value;
    try {
        let y = eval(x);
        display.value = y;
        lastResult = y;
    } catch (error) {
        display.value = 'Error';
    }
}
function ans() {
    const display = document.getElementById('result');
    display.value += lastResult;
}
function memClear() {
    memory = 0;
    alert("Memory cleared");
}

function memRecall() {
    const display = document.getElementById('result');
    display.value += memory;
}

function memAdd() {
    const display = document.getElementById('result');
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
        alert(`Added to memory: ${currentValue}`);
    }
}

function memSubtract() {
    const display = document.getElementById('result');
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
        alert(`Subtracted from memory: ${currentValue}`);
    }
}


function toggleAngleMode() {
    const angleToggleBtn = document.getElementById('angle-mode-toggle');
    if (angleMode === 'deg') {
        angleMode = 'rad';
        angleToggleBtn.textContent = 'rad'; 
        alert('Switched to Radian mode');
    } else {
        angleMode = 'deg';
        angleToggleBtn.textContent = 'deg'; 
        alert('Switched to Degree mode');
    }
}


function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}


function toDegrees(radians) {
    return radians * (180 / Math.PI);
}



function preparePower() {
    const display = document.getElementById('result');
    baseValue = parseFloat(display.value);  
    display.value = ''; 
}

// Function to calculate power
function calculatePower() {
    const display = document.getElementById('result');
    const exponentValue = parseFloat(display.value);  

    if (!isNaN(baseValue) && !isNaN(exponentValue)) {
        display.value = Math.pow(baseValue, exponentValue);
    } else {
        display.value = "Error";  
    }
}


function AC(){
    const display=document.getElementById('result')
    display.value='';
}
function del(){
    string = string.slice(0, -1);
    document.querySelector('input').value = string;
}
function x2(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,2);
}
function x3(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,3);
}
function x4(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,4);
}
function x5(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,5);
}
function x6(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,6);
}
function x7(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,6);
}
function x8(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,6);
}
function sin() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = Math.sin(toRadians(display.value));
    } else {
        display.value = Math.sin(display.value);
    }
}
function asin(){
    const display=document.getElementById('result')
    display.value=Math.asin(display.value)
}    
function cos() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = Math.cos(toRadians(display.value));
    } else {
        display.value = Math.cos(display.value);
    }
}
function sinh(){
    const display=document.getElementById('result')
    display.value=Math.sinh(display.value)
}
function cosh(){
    const display=document.getElementById('result')
    display.value=Math.cosh(display.value)
}
function acos(){
    const display=document.getElementById('result')
    display.value=Math.acos(display.value)
}
function tan() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = Math.tan(toRadians(display.value));
    } else {
        display.value = Math.tan(display.value);
    }
}
function tanh(){
    const display=document.getElementById('result')
    display.value=Math.tanh(display.value);
}
function atan(){
    const display=document.getElementById('result')
    display.value=Math.atan(display.value);
}
function cot() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.tan(toRadians(display.value));
    } else {
        display.value = 1/Math.tan(display.value);
    }
}
function sec() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.cos(toRadians(display.value));
    } else {
        display.value = 1/Math.cos(display.value);
    }
}
function cosec() {
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.sin(toRadians(display.value));
    } else {
        display.value = 1/Math.sin(display.value);
    }
}
function asec(){
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.acos(toRadians(display.value));
    } else {
        display.value = 1/Math.acos(display.value);
    }
}
function acosec(){
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.asin(toRadians(display.value));
    } else {
        display.value = 1/Math.asin(display.value);
    }
}

function coth(){
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.tanh(toRadians(display.value));
    } else {
        display.value = 1/Math.tanh(display.value);
    }
}
function acot(){
    const display = document.getElementById('result');
    if (angleMode === 'deg') {
        display.value = 1/Math.atan(toRadians(display.value));
    } else {
        display.value = 1/Math.atan(display.value);
    }
}
function log(){
    const display=document.getElementById('result')
    display.value=Math.log10(display.value);
}
function ln(){
    const display=document.getElementById('result')
    display.value=Math.log(display.value);
}
function Cuberoot(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,1/3);
}
function Squareroot(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,1/2);
}
function e(){
    const display=document.getElementById('result');
    display.value=Math.exp(display.value)
}

//permutation combination logic
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function nPr() {
    const display = document.getElementById('result');
    const values = display.value.split(',');
    if (values.length === 2) {
        const n = parseInt(values[0]);
        const r = parseInt(values[1]);
        display.value = permutation(n, r);
    } else {
        display.value = 'Error';
    }
}

function nCr() {
    const display = document.getElementById('result');
    const values = display.value.split(',');
    if (values.length === 2) {
        const n = parseInt(values[0]);
        const r = parseInt(values[1]);
        display.value = combination(n, r);
    } else {
        display.value = 'Error';
    }
}


