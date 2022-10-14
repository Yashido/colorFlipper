function randomNumber() {
    const rndNum = Math.floor(Math.random()*2);
};

const btnColor =document.getElementById('btn--color');
let bgColor = document.body.style.backgroundColor()

function colorArray() {
    let clrArray = ['red','blue', 'green', 'purple'];
    let i = 0;
    document.body.style.background.color('clrArray[i]')
    i++;
}