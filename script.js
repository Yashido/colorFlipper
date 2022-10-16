function randomNumber() {
    const rndNum = Math.floor(Math.random()* (16 - 0) + 0);
    return rndNum;
};

const color = document.getElementById('color');
var hexclr =[]
var x = 0;
var i = 0;
let clrArray = ['Red', 'orange', 'yellow','green','cyan','azure','blue','violet','magenta','rose'];
let hxArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function colorArray() {
    document.getElementById('page--container').style.backgroundColor = clrArray[i];
    color.innerHTML = clrArray[i];
    i++;
        if(i >= 9) {
            i = 0;
        };
    return;
}

function  hexArray() {
    while(x <= 5) {
        hexclr.push(hxArray[randomNumber()]);
        console.log(hexclr);
        x++;
    }
    let hex = hexclr.join('');
    document.getElementById('page--container').style.backgroundColor = '#'+ hex;
    color.innerHTML = '#' + hex;
    console.log(hex);
    if(hexclr.length >=6) {
        hexclr = [];
        x = 0;
    }
}